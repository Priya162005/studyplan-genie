const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const ACTIVITY_TEMPLATES = {
  Beginner: [
    'Read introductory material on {topic}',
    'Watch tutorial videos about {topic}',
    'Take notes on key concepts of {topic}',
    'Practice basic exercises for {topic}',
    'Review and summarize {topic} notes',
    'Complete beginner worksheets on {topic}',
    'Create flashcards for {topic} vocabulary',
  ],
  Intermediate: [
    'Study core concepts of {topic}',
    'Solve practice problems on {topic}',
    'Review previous {topic} material',
    'Work through example problems for {topic}',
    'Write summaries of {topic} chapters',
    'Attempt past exam questions on {topic}',
    'Discuss {topic} concepts with study group',
  ],
  Advanced: [
    'Deep dive into advanced {topic} theory',
    'Solve complex problems on {topic}',
    'Analyze case studies related to {topic}',
    'Write a detailed essay on {topic}',
    'Teach {topic} concepts to others',
    'Research latest developments in {topic}',
    'Create mind maps connecting {topic} ideas',
  ],
}

const TIPS_BY_DIFFICULTY = {
  Beginner: [
    'Start with short study sessions and gradually increase duration',
    'Focus on understanding fundamentals before moving to complex topics',
    'Use visual aids like diagrams and charts to reinforce learning',
    'Take regular breaks every 25-30 minutes using the Pomodoro technique',
    'Keep a study journal to track your progress and questions',
    'Do not hesitate to revisit concepts you find challenging',
  ],
  Intermediate: [
    'Use active recall by testing yourself regularly',
    'Alternate between different topics to improve retention',
    'Create connections between related concepts across topics',
    'Practice problems under timed conditions to build speed',
    'Review mistakes carefully and understand why they happened',
    'Join study groups for collaborative learning',
  ],
  Advanced: [
    'Focus on problem-solving strategies rather than memorization',
    'Teach concepts to others to deepen your understanding',
    'Work on interdisciplinary connections between subjects',
    'Set specific, measurable goals for each study session',
    'Use spaced repetition for long-term retention',
    'Challenge yourself with problems beyond your comfort zone',
  ],
}

function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function generateStudyPlan(formData) {
  const topics = formData.topics.split(',').map(t => t.trim()).filter(Boolean)
  const weeks = parseInt(formData.duration) || 4
  const hoursPerDay = parseFloat(formData.hoursPerDay) || 2
  const daysPerWeek = parseInt(formData.daysPerWeek) || 5
  const difficulty = formData.difficulty || 'Intermediate'
  const activities = ACTIVITY_TEMPLATES[difficulty]

  const topicsPerWeek = Math.max(1, Math.ceil(topics.length / weeks))
  const generatedWeeks = []

  for (let w = 0; w < weeks; w++) {
    const weekTopics = topics.slice(w * topicsPerWeek, (w + 1) * topicsPerWeek)
    if (weekTopics.length === 0) {
      const reviewTopics = topics.slice(0, topicsPerWeek)
      weekTopics.push(...reviewTopics)
    }

    const focusLabel = weekTopics.length > 0
      ? weekTopics.join(' & ')
      : 'Review'

    const days = []
    const selectedDays = DAY_NAMES.slice(0, daysPerWeek)

    for (let d = 0; d < daysPerWeek; d++) {
      const dayTopic = weekTopics[d % weekTopics.length]
      const shuffledActivities = shuffleArray(activities)
      const numTasks = Math.max(1, Math.min(4, Math.round(hoursPerDay)))

      const tasks = shuffledActivities
        .slice(0, numTasks)
        .map(a => a.replace('{topic}', dayTopic))

      if (d === daysPerWeek - 1) {
        tasks.push(`Weekly review: consolidate notes on ${weekTopics.join(', ')}`)
      }

      days.push({
        name: selectedDays[d],
        tasks,
      })
    }

    generatedWeeks.push({
      focus: focusLabel,
      days,
    })
  }

  return {
    subject: formData.subject,
    duration: weeks,
    hoursPerDay,
    difficulty,
    goal: formData.goal || 'Master the subject',
    weeks: generatedWeeks,
    tips: TIPS_BY_DIFFICULTY[difficulty],
  }
}
