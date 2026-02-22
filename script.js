const jobs = [
    {
        id: 1,
        "job title": "Data Analyst",
        "company name": "Insight Analytics",
        "job nature": "Full Time",
        location: "Boston",
        "min salary": "70,000",
        "max salary": "110,000",
        status: "Interview",
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

let toggled = "all-jobs";
// let toggled = "Interview";

function interview(jobId) {
    let job = jobs.find((job) => job.id === jobId);
    job.status = "Interview";
}

function reject(jobId) {
    let job = jobs.find((job) => job.id === jobId);
    job.status = "Rejected";
}

function deleteJob(jobId) {
    let jobIndex = jobs.findIndex((job) => job.id === jobId);
    jobs.splice(jobIndex, 1);
}

function filterByStatus(status) {
    let filteredJobs = jobs.filter((job) => job.status === status);
    return filteredJobs;
}

// ----------------------- dom manipulation start here -----------------------

const totalCount = document.getElementById("total-counter");
const interviewCount = document.getElementById("interview-counter");
const rejectedCount = document.getElementById("rejected-counter");

const jobCount = document.getElementById("job-count");

const jobContainer = document.getElementById("jobs-container");

document.addEventListener("DOMContentLoaded", function () {
    renderJobs(jobs);
    updateCounter();
    updateJobCount();
});

function updateCounter() {
    totalCount.textContent = jobs.length;
    interviewCount.textContent = filterByStatus("Interview").length;
    rejectedCount.textContent = filterByStatus("Rejected").length;
}

function updateJobCount() {
    if (toggled === "all-jobs") {
        jobCount.textContent = `${jobs.length} jobs`;
    } else {
        jobCount.textContent = `${filterByStatus(toggled).length} of ${jobs.length} jobs`;
    }
}

function renderJobs(jobs) {
    jobContainer.innerHTML = "";

    if (jobs.length === 0) {
        jobContainer.innerHTML = `
            <!-- empty state--> 
            <div class="space-y-5 bg-white border border-[#F1F2F4] rounded-lg text-center py-16 px-10">
                <img src="./empty-state.png" alt="empty-state text image" class="mx-auto">
                <div>
                    <p class="text-2xl font-semibold text-[#002C5C] mb-1">No jobs available</p>
                    <p class="text-[#64748B]">Check back soon for new opportunities</p>
                </div>
            </div>
        `;
    }
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

        jobContainer.appendChild(jobCard);
    });
}