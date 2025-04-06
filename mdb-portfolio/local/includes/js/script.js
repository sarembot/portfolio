"use strict";
$("#heroContainer").hide();

$(document).ready(() => {
  const callToActionBtn = $("#callToActionBtn");
  const navBurger = $("#navBurger");
  const sidebar = $(".sidebar");
  const body = $("body");

  // Create and append overlay
  const overlay = $('<div class="sidebar-overlay"></div>');
  $("body").append(overlay);

  navBurger.on("click", (e) => {
    e.stopPropagation();
    sidebar.toggleClass("show");
    overlay.toggleClass("show");
    const isExpanded = navBurger.attr("aria-expanded") === "true";
    navBurger.attr("aria-expanded", !isExpanded);
  });

  // Fade in homepage
  const homepageAnimations = () => {
    $("#heroContainer").fadeIn(2000);
  };

  homepageAnimations();

  // Close sidebar after clicking on a nav link
  $(".nav-link").on("click", () => {
    sidebar.removeClass("show");
    overlay.removeClass("show");
    navBurger.attr("aria-expanded", "false");
  });

  // Close sidebar when clicking overlay
  overlay.on("click", () => {
    sidebar.removeClass("show");
    overlay.removeClass("show");
    navBurger.attr("aria-expanded", "false");
  });

  // For creating "Input" objects with custom attributes
  class Input {
    constructor(name, regex, errorMsg) {
      this.name = name;
      this.regex = regex; // Define custom regex filter
      this.errorMsg = errorMsg; // Define custom error message

      this.input = document.getElementById(`${this.name}Input`); // eg. fNameInput
      this.icon = document.getElementById(`${this.name}Icon`); // eg. fNameIcon
      this.errorSpan = document.getElementById(`${this.name}Error`); // Contianer for error message
      this.valid = false; // Keeps track of if the input is good/bad
    }

    // Allows us to get the most recent value - rather than the initial value
    getUpdatedValue() {
      return this.input.value;
    }
  }

  let contactFormInputs = [
    new Input(
      /* Name: */ "name",
      /* Regex: */ /^[a-zA-Z]+$/,
      /* Error Msg: */ "Please enter your full name"
    ),
    new Input(
      "email",
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ),
    new Input(
      "message",
      /^[a-zA-Z0-9\s]+$/,
      "Message must be more than 10 characters"
    ),
  ];

  // Contact form inputs
  // ClassLists to be used to toggle between icons when validating inputs
  const inputIcons = {
    neutral: "fs-5 bi-dash-circle",
    good: "fs-5 bi-check-circle",
    bad: "fs-5 bi-x-circle",
  };

  // ClassLists to add/remove a bunch of classes from input elements - for changing the border, etc
  let goodInputClassList = [
    "border",
    "border-4",
    "border-rounded",
    "focus-ring",
    "focus-ring-success",
    "border-success",
    "border-opacity-50",
  ];

  let badInputClassList = [
    "border",
    "border-4",
    "border-rounded",
    "focus-ring",
    "focus-ring-danger",
    "border-danger",
    "border-opacity-50",
  ];

  /**
   * Add blur events and validation to each input in the contact form
   */
  contactFormInputs.forEach((obj) => {
    // 'blur' event fires when an element has lost focus
    obj.input.addEventListener("blur", () => {
      // If empty input
      if (obj.getUpdatedValue() === "") {
        // Clear previous input classes - back to default
        obj.input.classList.remove(...goodInputClassList);
        obj.input.classList.remove(...badInputClassList);
        obj.icon.className = inputIcons.neutral; // className clears prev classes

        obj.errorSpan.style.display = "none";
        obj.valid = false;

        // If good input
      } else if (obj.regex.test(obj.getUpdatedValue())) {
        obj.input.classList.remove(...badInputClassList); // Remove red styles
        obj.input.classList.add(...goodInputClassList); // Add green styles

        obj.icon.className = inputIcons.good; // Set checkmark icon
        obj.errorSpan.style.display = "none"; // Hide error message
        obj.valid = true;

        // If bad input
      } else {
        obj.input.classList.remove(...goodInputClassList); // Remove greens styles
        obj.input.classList.add(...badInputClassList); // Add red styles

        obj.icon.className = inputIcons.bad; // Set X icon
        obj.errorSpan.textContent = obj.errorMsg; // Display error message
        obj.errorSpan.style.display = "inline";

        obj.valid = false;
      }
    });
  });

  // Contact form submission
  $("#contactForm").on("submit", async (e) => {
    e.preventDefault();

    try {
      const name = $("#nameInput").val();
      const email = $("#emailInput").val();
      const message = $("#messageInput").val();

      // Client-side validation
      for (let input of contactFormInputs) {
        if (!input.regex.test($(`#${input.name}Input`).val())) {
          throw new Error(input.errorMsg);
        }
      }

      // Send to server
      const url = "/api/contact";
      console.log("Sending request to: ", url);
      console.log("Data:", { name, email, message });
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }
      // Make an alert
      const div = `<div class="alert alert-primary position-fixed top-0 start-0 w-100 text-center" role="alert" style="z-index:1050;">Message successfully sent!</div>`;

      $("body").prepend(div); // Add to start of DOM
      $(".alert").alert();

      // After 2.5 seconds, remove alert from DOM
      setTimeout(() => {
        $(".alert").fadeOut(300, () => {
          this.dispose();
        });
      }, 2500);

      $("#contactForm")[0].reset();
    } catch (error) {
      console.error("Error:", error);
      console.log("Error:", error.message);
    }
  });
});
