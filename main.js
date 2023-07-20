        // Function to show the notification
        function showNotification() {
            const notification = document.getElementById("notification");
            notification.style.display = "block";

            // Adding a small delay to trigger the animation
            setTimeout(function () {
                notification.style.animationPlayState = "running";
            }, 100);

            // Hide the notification after 3 seconds (adjust as needed)
            setTimeout(function () {
                notification.style.display = "none";
                notification.style.animationPlayState = "paused"; // Reset animation state
            }, 3000);
        }

        const buttons = document.querySelectorAll("#notification-button");
        buttons.forEach(button => {
            button.addEventListener("click", showNotification);
        });