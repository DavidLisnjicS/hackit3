form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const res = await fetch("/check-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input.value })
    });

    const data = await res.json();

    if (data.ok) {
        message.textContent = "Korrekt! Du hast Level A geschafft.";
        message.className = "success";
        setTimeout(() => window.location.href = "level-b.html", 2000);
    } else {
        message.textContent = "Falsches Passwort.";
        message.className = "error";
    }

    input.value = "";
});
