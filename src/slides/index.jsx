import SlideCover from './SlideCover.jsx'
import SlideHello from './SlideHello.jsx'
import SlideDate from './SlideDate.jsx'
import SlideNumbers from './SlideNumbers.jsx'
import SlideHeroes from './SlideHeroes.jsx'
import SlideQuiz from './SlideQuiz.jsx'
import SlideAgenda from './SlideAgenda.jsx'
import SlideThanks from './SlideThanks.jsx'

export const slides = [
  { title: 'hallo!', component: SlideCover, dark: false },
  { title: 'ich bin karen', component: SlideHello, dark: true },
  { title: 'ratefrage', component: SlideDate, dark: false },
  { title: 'was wir bauen', component: SlideNumbers, dark: false },
  { title: 'international', component: SlideHeroes, dark: false },
  { title: 'was ingenieur:innen tun', component: SlideAgenda, dark: false },
  { title: 'denk mit!', component: SlideQuiz, dark: true },
  { title: 'viel spaß', component: SlideThanks, dark: false },
]
