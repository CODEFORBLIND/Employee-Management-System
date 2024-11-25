
const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Prepare monthly report",
        "description": "Compile and submit the monthly performance report.",
        "date": "2024-11-10",
        "category": "Reports"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Update client details",
        "description": "Ensure all client information is up to date in the CRM system.",
        "date": "2024-10-15",
        "category": "Data Management"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Organize team meeting",
        "description": "Schedule and prepare agenda for the upcoming team meeting.",
        "date": "2024-11-12",
        "category": "Meetings"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstname": "Rohit",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Create marketing plan",
        "description": "Develop a marketing strategy for the new product launch.",
        "date": "2024-11-13",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Inventory check",
        "description": "Perform an inventory check and update the records.",
        "date": "2024-11-01",
        "category": "Inventory"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Customer follow-up",
        "description": "Reach out to clients for feedback on recent services.",
        "date": "2024-11-10",
        "category": "Customer Service"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstname": "Vikram",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Project kickoff meeting",
        "description": "Prepare materials for the new project kickoff meeting.",
        "date": "2024-11-14",
        "category": "Projects"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Database backup",
        "description": "Ensure the weekly database backup is completed.",
        "date": "2024-11-10",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Employee feedback survey",
        "description": "Conduct and analyze employee feedback survey results.",
        "date": "2024-10-20",
        "category": "HR"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstname": "Anjali",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Security audit",
        "description": "Perform a security audit of company systems.",
        "date": "2024-11-11",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Data entry review",
        "description": "Review recent data entries for accuracy.",
        "date": "2024-10-22",
        "category": "Quality Control"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Prepare budget forecast",
        "description": "Draft budget forecast for Q1 2025.",
        "date": "2024-11-20",
        "category": "Finance"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstname": "Sneha",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Update website content",
        "description": "Revise outdated information on the company website.",
        "date": "2024-11-18",
        "category": "Web Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Compile expense report",
        "description": "Gather and submit the monthly expense report.",
        "date": "2024-10-31",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Client presentation",
        "description": "Create slides for the upcoming client presentation.",
        "date": "2024-11-15",
        "category": "Sales"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

  

const admin= [{
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }]

export const setLocalStorage =()=>{
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage =()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    // console.log(employees, admin)
    return {employees, admin}
}