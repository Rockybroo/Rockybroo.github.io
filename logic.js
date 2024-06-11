var isvis = 0;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("me-title").addEventListener(("mouseenter"||"click"), function() {
        document.getElementById("me-title").style.transition = "margin-top 0.3s ease";
        document.getElementById("me-title").style.marginTop = "-3.3%";
        setTimeout(function() {
            document.getElementById("listh").style.visibility = "visible";
        },150)
        document.getElementById("about").style.transition = "margin-top 0.3s ease";
        document.getElementById("about").style.marginTop = "130%";
});
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("me-title").addEventListener("mouseleave", function() {
        document.getElementById("listh").style.visibility = "visible";
});
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("about").addEventListener("click", function() {
        window.location.href = "about.html";
});
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("qualifications").addEventListener("click", function() {
        window.location.href = "qualifications.html";
});
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hobbies").addEventListener("click", function() {
        window.location.href = "hobbies.html";
});
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("projects").addEventListener("click", function() {
        window.location.href = "projects.html";
});
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Home").addEventListener("click", function() {
        window.location.href = "index.html";
});
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('Mario').addEventListener('click', function() {
        updateCompilerSrc('https://www.jdoodle.com/embed/v0/7gbQ?stdin=1&arg=0');
    });

    document.getElementById('Cash').addEventListener('click', function() {
        updateCompilerSrc('https://www.jdoodle.com/embed/v0/7gbL?stdin=1&arg=0');
    });

    document.getElementById('Readability').addEventListener('click', function() {
        updateCompilerSrc('https://www.jdoodle.com/embed/v0/7gbm?stdin=1&arg=0');
    });
});

function updateCompilerSrc(newSrc) {
    var compilerIframe = document.querySelector('#compiler iframe');
    compilerIframe.src = newSrc;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('Mario').addEventListener('click', function() {
        document.getElementById("Cash").style.backgroundColor = "var(--bs-gray-900)";
        document.getElementById("Readability").style.backgroundColor = "var(--bs-gray-900)";
        document.getElementById("Mario").style.backgroundColor = "var(--bs-gray-800)";
    });

    document.getElementById('Cash').addEventListener('click', function() {
        document.getElementById("Cash").style.backgroundColor = "var(--bs-gray-800)";
        document.getElementById("Readability").style.backgroundColor = "var(--bs-gray-900)";
        document.getElementById("Mario").style.backgroundColor = "var(--bs-gray-900)";
    });

    document.getElementById('Readability').addEventListener('click', function() {
        document.getElementById("Cash").style.backgroundColor = "var(--bs-gray-900)";
        document.getElementById("Readability").style.backgroundColor = "var(--bs-gray-800)";
        document.getElementById("Mario").style.backgroundColor = "var(--bs-gray-900)";
    });
});