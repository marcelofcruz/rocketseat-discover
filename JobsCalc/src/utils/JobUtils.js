module.exports= {
    remainingDays(job) {
        const remainingDays = Number((job["total-hours"] / job["daily-hours"]).toFixed())
        const createdDate = new Date(job.created_at).getDate()
        const dueDay = createdDate + remainingDays
        const dayDiff = dueDay - createdDate
        return dayDiff
    },
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}

