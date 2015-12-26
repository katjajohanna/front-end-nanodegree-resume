/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
    "name": "Johanna Pelkonen",
    "role": "Software developer",
    "contacts": {
        "mobile": "010 123 123",
        "email": "katjajohanna@outlook.com",
        "github": "katjajohanna",
        "twitter": "@katjajohanna2",
        "location": "Jyväskylä, Finland"
    },
    "welcomeMessage": "Nice to meet you!",
    "skills": ["software developer", "human person", "code passionist", "sunshine", "code readability enhancer", "architect-to-be"],
    "biopic": "https://media.licdn.com/media/AAEAAQAAAAAAAAWCAAAAJDg4MDQyZWU3LWI4NTQtNGM0ZC1hZDVlLWVlYTAxOTllOTE2Nw.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header")
        .prepend(formattedBioPic)
        .prepend(formattedName)
        .append(formattedRole)
        .append(formattedWelcomeMsg);

    $("#header").append(HTMLcontactStart);
    $(".contact-entries, #footerContacts")
        .append(HTMLemail.replace("%data%", bio.contacts.email))
        .append(HTMLtwitter.replace("%data%", bio.contacts.twitter))
        .append(HTMLgithub.replace("%data%", bio.contacts.github))
        .append(HTMLlocation.replace("%data%", bio.contacts.location));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(item) {
            $("#skills").append(HTMLskills.replace("%data%", item));
        });
    }
};

var work = {
    "jobs": [
        {
            "employer": "Paytrail",
            "title": "Software developer",
            "dates": "2/2010 - present",
            "location": "Jyväskylä, Finland",
            "description": "I work as a software developer in a small team. My responsibility is both front-end and back-end development for our e-payment solutions and e-merchant services.",
            "url": "http://www.paytrail.com/en"
        },
        {
            "employer": "Enkora",
            "title": "Software developer",
            "dates": "5/2009 - 8/2009",
            "location": "Helsinki, Finland",
            "description": "This was my summer job while studying. I worked as a software developer. I implemented small features to our internal tools and our product for sport hall solutions. My job also included customer support, training and installation.",
            "url": "http://www.enkora.fi/en/"
        }
    ]
};

work.display = function() {
    for (var job of work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace("%data%", job.employer);
        employer = employer.replace("%url%", job.url);
        var title = HTMLworkTitle.replace("%data%", job.title);
        var dates = HTMLworkDates.replace("%data%", job.dates);
        var workLocation = HTMLworkLocation.replace("%data%", job.location);
        var description = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(employer + title + dates + workLocation + description);
    }
};

var projects = {
    "projects": [
        {
            "title": "Code School for kids",
            "dates": "2014",
            "description": "I was co-teaching in three separate coding school events for kids (age 3-11).",
            "images": ["https://hourofcode.com/us/en/images/hour-of-code-logo.png", "https://library.osu.edu/blogs/it/files/2013/12/HourOfCode.png"],
            "url": "https://hourofcode.com/"
        }
    ]
};

projects.display = function() {
    for (var project of projects.projects) {
        var images = "";

        for (image of project.images) {
            images += HTMLprojectImage.replace("%data%", image);
        }

        title = HTMLprojectTitle.replace("%data%", project.title);
        title = title.replace("%url%", project.url);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(
            title +
            HTMLprojectDates.replace("%data%", project.dates) +
            HTMLprojectDescription.replace("%data%", project.description) +
            images
        );
    }
};

var education = {
    "schools": [
        {
            "name": "Mikkeli University of Applied Sciences",
            "dates": "2007-2010",
            "location": "Mikkeli, Finland",
            "degree": "Bachelor of Business Administration, Business Information Technology",
            "majors": [],
            "url": "http://www.mamk.fi/front_page"
        }
    ],
    "onlineCourses": [
        {
            "title": "Cryptography I",
            "school": "Stanford University (Coursera)",
            "date": "Oct 2015",
            "url": "https://www.coursera.org/course/crypto"
        },
        {
            "title": "Introduction to Computer Science and Programming Using Python",
            "school": "MITx (EdX)",
            "date": "Mar 2015",
            "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-6"
        },
        {
            "title": "Introduction to Functional Programming",
            "school": "DelftX (EdX)",
            "date": "Dec 2014",
            "url": "https://www.edx.org/course/introduction-functional-programming-delftx-fp101x-0"
        },
        {
            "title": "Introduction to Linux ",
            "school": "LinuxFoundationX (EdX)",
            "date": "Dec 2014",
            "url": "https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-2"
        },
        {
            "title": "Engineering Software as a Service",
            "school": "BerkeleyX (EdX)",
            "date": "Jun 2014",
            "url": "https://www.edx.org/course/engineering-software-service-saas-part-1-uc-berkeleyx-cs169-1x"
        }
]};

education.display = function() {
    for (var school of education.schools) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(
            HTMLschoolName.replace("%data%", school.name) +
            HTMLschoolDegree.replace("%data%", school.degree) +
            HTMLschoolDates.replace("%data%", school.dates) +
            HTMLschoolLocation.replace("%data%", school.location)
        );
    }

    $("#education").append(HTMLonlineClasses);

    for (var course of education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var title = HTMLonlineTitle.replace("%data%", course.title);
        title = title.replace("%url%", course.url);

        $(".education-entry:last").append(
            title +
            HTMLonlineSchool.replace("%data%", course.school) +
            HTMLonlineDates.replace("%data%", course.dates)
        );
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$("#menu_button").on("click", function() {
    $("#menu").toggle("slow");
});

$("#menu").on("click", function() {
    $("#menu").toggle("slow");
});