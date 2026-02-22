import { useState } from 'react'

const SUBJECTS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology',
  'Computer Science', 'English', 'History', 'Geography',
  'Economics', 'Psychology', 'Art', 'Music', 'Other'
]

const DIFFICULTY_LEVELS = ['Beginner', 'Intermediate', 'Advanced']

function StudyPlanForm({ onGenerate }) {
  const [formData, setFormData] = useState({
    subject: '',
    topics: '',
    duration: '4',
    hoursPerDay: '2',
    difficulty: 'Intermediate',
    daysPerWeek: '5',
    goal: '',
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onGenerate(formData)
  }

  const isValid = formData.subject && formData.topics

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Tell us about your study goals</h2>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
            <option value="">Select a subject</option>
            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="difficulty">Difficulty Level</label>
          <select id="difficulty" name="difficulty" value={formData.difficulty} onChange={handleChange}>
            {DIFFICULTY_LEVELS.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        <div className="form-group full-width">
          <label htmlFor="topics">Topics to Cover</label>
          <textarea
            id="topics"
            name="topics"
            value={formData.topics}
            onChange={handleChange}
            placeholder="Enter topics separated by commas (e.g., Algebra, Calculus, Geometry)"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration (weeks)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            min="1"
            max="52"
          />
        </div>

        <div className="form-group">
          <label htmlFor="hoursPerDay">Hours per Day</label>
          <input
            type="number"
            id="hoursPerDay"
            name="hoursPerDay"
            value={formData.hoursPerDay}
            onChange={handleChange}
            min="0.5"
            max="12"
            step="0.5"
          />
        </div>

        <div className="form-group">
          <label htmlFor="daysPerWeek">Days per Week</label>
          <select id="daysPerWeek" name="daysPerWeek" value={formData.daysPerWeek} onChange={handleChange}>
            {[1,2,3,4,5,6,7].map(d => <option key={d} value={d}>{d} day{d > 1 ? 's' : ''}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="goal">Study Goal</label>
          <input
            type="text"
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            placeholder="e.g., Pass final exam"
          />
        </div>
      </div>

      <button type="submit" className="generate-btn" disabled={!isValid}>
        Generate My Study Plan
      </button>
    </form>
  )
}

export default StudyPlanForm
