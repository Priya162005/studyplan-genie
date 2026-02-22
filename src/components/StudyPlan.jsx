function StudyPlan({ plan, onReset }) {
  return (
    <div className="plan-card">
      <h2>Your Personalized Study Plan</h2>

      <div className="plan-summary">
        <div className="summary-item">
          <div className="label">Subject</div>
          <div className="value">{plan.subject}</div>
        </div>
        <div className="summary-item">
          <div className="label">Duration</div>
          <div className="value">{plan.duration} weeks</div>
        </div>
        <div className="summary-item">
          <div className="label">Daily Hours</div>
          <div className="value">{plan.hoursPerDay}h</div>
        </div>
        <div className="summary-item">
          <div className="label">Difficulty</div>
          <div className="value">{plan.difficulty}</div>
        </div>
      </div>

      {plan.weeks.map((week, wi) => (
        <div key={wi} className="week-block">
          <h3>Week {wi + 1}: {week.focus}</h3>
          {week.days.map((day, di) => (
            <div key={di} className="day-row">
              <div className="day-name">{day.name}</div>
              <div className="day-tasks">
                {day.tasks.map((task, ti) => (
                  <div key={ti} className="task-item">
                    <span className="task-bullet"></span>
                    {task}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="tips-section">
        <h3>Study Tips</h3>
        <ul>
          {plan.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>

      <button className="new-plan-btn" onClick={onReset}>
        Create a New Plan
      </button>
    </div>
  )
}

export default StudyPlan
