const jobs = [
    {
        id: 1,
        "job title": "Data Analyst",
        "company name": "Insight Analytics",
        "job nature": "Full Time",
        location: "Boston",
        "min salary": "70,000",
        "max salary": "110,000",
        status: "interview",
        description: "Collect, process, and analyze data to provide insights, create reports, and support business decision-making through data-driven strategies.",
    },
    {
        id: 2,
        "job title": "Software Engineer",
        "company name": "Tech Solutions Ltd.",
        "job nature": "Full Time",
        location: "San Francisco",
        "min salary": "100,000",
        "max salary": "150,000",
        status: "Not applied",
        description: "Develop, test, and maintain software applications; collaborate with cross-functional teams; and ensure efficient code quality and performance.",
    },
    {
        id: 3,
        "job title": "Graphic Designer",
        "company name": "Creative Studio",
        "job nature": "Part Time",
        location: "Los Angeles",
        "min salary": "45,000",
        "max salary": "70,000",
        status: "Not applied",
        description: "Create visual concepts for digital and print media, design layouts, and work closely with clients to deliver creative solutions.",
    },
    {
        id: 4,
        "job title": "Teacher",
        "company name": "Sunrise Academy",
        "job nature": "Full Time",
        location: "Chicago",
        "min salary": "50,000",
        "max salary": "80,000",
        status: "Not applied",
        description: "Prepare lesson plans, teach students across various subjects, assess learning progress, and foster a positive classroom environment.",
    },
    {
        id: 5,
        "job title": "Nurse",
        "company name": "City Hospital",
        "job nature": "Full Time",
        location: "Houston",
        "min salary": "60,000",
        "max salary": "90,000",
        status: "Not applied",
        description: "Provide patient care, assist doctors, administer medications, monitor vital signs, and educate patients on health maintenance.",
    },
    {
        id: 6,
        "job title": "Chef",
        "company name": "Gourmet Kitchen",
        "job nature": "Full Time",
        location: "Miami",
        "min salary": "40,000",
        "max salary": "65,000",
        status: "Not applied",
        description: "Prepare and cook meals, manage kitchen staff, maintain inventory, ensure hygiene standards, and develop new recipes.",
    },
    {
        id: 7,
        "job title": "Digital Marketing Specialist",
        "company name": "MarketPro Agency",
        "job nature": "Contract",
        location: "Seattle",
        "min salary": "55,000",
        "max salary": "85,000",
        status: "Not applied",
        description: "Plan and execute digital campaigns, analyze metrics, optimize SEO/SEM, manage social media, and improve brand presence online.",
    },
    {
        id: 8,
        "job title": "Civil Engineer",
        "company name": "BuildRight Corp.",
        "job nature": "Full Time",
        location: "Denver",
        "min salary": "90,000",
        "max salary": "130,000",
        status: "Not applied",
        description: "Design, plan, and oversee construction projects, ensure compliance with safety and regulations, and manage project budgets and timelines.",
    }
];

let toggleSelected = "all-jobs";

const totalJobs = document.getElementById("total-jobs");
const interviewJobs = document.getElementById("interview-total");
const rejectedJobs = document.getElementById("rejected-total");

const jobsDialog = document.getElementById("jobs-dialog");
const jobsContainer = document.getElementById("jobs-container");

function interview(jobId) {
    let job = jobs.find((job) => job.id === jobId);
    job.status = "interview";
    renderJobs(jobs);
    calculateJobs();
}

function reject(jobId) {
    let job = jobs.find((job) => job.id === jobId);
    job.status = "rejected";
    renderJobs(jobs);
    calculateJobs();
}

function deleteJob(jobId) {
    let jobIndex = jobs.findIndex((job) => job.id === jobId);
    jobs.splice(jobIndex, 1);
    if (toggleSelected === "all-jobs") {
        renderJobs(jobs);
    } else {
        renderJobs(filterByStatus(toggleSelected));
    }
    calculateJobs();
}

function filterByStatus(status) {
    let filteredJobs = jobs.filter((job) => job.status === status);
    return filteredJobs;
}

document.addEventListener("DOMContentLoaded", function () {
    calculateJobs();
    onToggle("all-jobs");
    renderJobs(jobs);
});

function calculateJobs() {
    totalJobs.textContent = jobs.length;
    interviewJobs.textContent = filterByStatus("interview").length;
    rejectedJobs.textContent = filterByStatus("rejected").length;
}

function onToggle(toggled) {
    toggleSelected = toggled;

    editeStyleOnToogle(toggled);

    if (toggled === "all-jobs") {
        jobsDialog.innerText = `${jobs.length} jobs`;
        renderJobs(jobs);
    } else {
        jobsDialog.innerText = `${filterByStatus(toggled).length} of ${jobs.length} jobs`;
        renderJobs(filterByStatus(toggled));
    }
}

function editeStyleOnToogle(toggled) {
    const allJobs = document.getElementById("all-jobs");
    const interview = document.getElementById("interview");
    const rejected = document.getElementById("rejected");

    if (toggled === "all-jobs") {
        allJobs.classList.remove("bg-white", "text-[#64748B]");
        allJobs.classList.add("bg-[#3B82F6]", "text-white");

        interview.classList.remove("bg-[#3B82F6]", "text-white");
        interview.classList.add("bg-white", "text-[#64748B]");

        rejected.classList.remove("bg-[#3B82F6]", "text-white");
        rejected.classList.add("bg-white", "text-[#64748B]");
    } else if (toggled === "interview") {
        allJobs.classList.remove("bg-[#3B82F6]", "text-white");
        allJobs.classList.add("bg-white", "text-[#64748B]");

        interview.classList.remove("bg-white", "text-[#64748B]");
        interview.classList.add("bg-[#3B82F6]", "text-white");

        rejected.classList.remove("bg-[#3B82F6]", "text-white");
        rejected.classList.add("bg-white", "text-[#64748B]");
    } else if (toggled === "rejected") {
        allJobs.classList.remove("bg-[#3B82F6]", "text-white");
        allJobs.classList.add("bg-white", "text-[#64748B]");

        interview.classList.remove("bg-[#3B82F6]", "text-white");
        interview.classList.add("bg-white", "text-[#64748B]");

        rejected.classList.remove("bg-white", "text-[#64748B]");
        rejected.classList.add("bg-[#3B82F6]", "text-white");
    }
}

function renderJobs(jobs) {
    jobsContainer.innerHTML = "";

    if (jobs.length === 0) {
        jobsContainer.innerHTML = `
            <div class="space-y-5 bg-white border border-[#F1F2F4] rounded-lg text-center py-16 px-10">
                <img src="./empty-state.png" alt="empty-state text image" class="mx-auto">
                <div>
                    <p class="text-2xl font-semibold text-[#002C5C] mb-1">No jobs available</p>
                    <p class="text-[#64748B]">Check back soon for new opportunities</p>
                </div>
            </div>
        `;
    } else {
        jobs.forEach((job) => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("space-y-5", "bg-white", "p-6", "border", "border-[#F1F2F4]", "rounded-lg");
            jobCard.innerHTML = `
                <div class="space-y-1 flex justify-between items-center">
                    <div>
                        <h3 class="text-lg font-bold text-[#002C5C]">#${job.id} - ${job["job title"]}</h3>
                        <p class="text-[#64748B]">${job["company name"]}</p>
                    </div>

                    <button onclick="deleteJob(${job.id})" class="text-[#64748B] border border-[#F1F2F4] rounded-full w-[32px] h-[32px]">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>

                <p class="text-sm text-[#64748B]"><span>${job.location}</span> • <span>${job["job nature"]}</span> • $<span>${job["min salary"]}</span> - $<span>${job["max salary"]}</span></p>

                <div class="space-y-2">
                    <p class="text-sm font-medium uppercase text-[#002C5C] px-3 py-2 bg-[#EEF4FF] inline-block rounded">${job.status}</p>
                    <p class="text-sm">${job.description}</p>
                </div>

                <div class="flex gap-2">
                    <button onclick="interview(${job.id})" class="text-sm font-semibold px-3 py-2 uppercase border border-[#10B981] text-[#10B981] rounded">Interview</button>
                    <button onclick="reject(${job.id})" class="text-sm font-semibold px-3 py-2 uppercase border border-[#EF4444] text-[#EF4444] rounded">Rejected</button>
                </div>
            `;

            jobsContainer.appendChild(jobCard);
        });
    }
}