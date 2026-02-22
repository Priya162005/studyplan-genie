import { useState } from 'react'
import './App.css'
import StudyPlanForm from './components/StudyPlanForm'
import StudyPlan from './components/StudyPlan'
import { generateStudyPlan } from './utils/planGenerator'

function App() {
  const [plan, setPlan] = useState(null)

  const handleGenerate = (formData) => {
    const generatedPlan = generateStudyPlan(formData)
    setPlan(generatedPlan)
  }

  const handleReset = () => {
    setPlan(null)
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Study Plan Genie</h1>
        <p>Create a personalized study plan tailored to your goals</p>
      </div>
      <div className="container">
        {!plan ? (
          <StudyPlanForm onGenerate={handleGenerate} />
        ) : (
          <StudyPlan plan={plan} onReset={handleReset} />
        )}
      </div>
    </div>
  )
}

export default App
