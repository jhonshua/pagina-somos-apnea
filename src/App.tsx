import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Courses } from './components/Courses';
import { TrainingSpots } from './components/TrainingSpots';
import { LeadModal } from './components/LeadModal';
import { CalendarModal } from './components/CalendarModal';
import { Footer } from './components/Footer';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleOpenModal = (courseName: string = '') => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const handleBookFromCalendar = (activityTitle: string) => {
    setIsCalendarOpen(false);
    handleOpenModal(activityTitle);
  };

  return (
    <div className="min-h-screen bg-ocean-950 text-slate-100 flex flex-col selection:bg-coral-500 selection:text-white">
      {/* Floating Glassmorphism Navbar */}
      <Navbar onOpenJoinModal={() => handleOpenModal('')} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section matching the mockup */}
        <Hero 
          onOpenJoinModal={() => handleOpenModal('')}
          onOpenCalendarModal={() => setIsCalendarOpen(true)}
        />

        {/* Stats & Credibility */}
        <Stats />

        {/* Courses & Certifications */}
        <Courses onSelectCourse={(course) => handleOpenModal(course)} />

        {/* Training Spots in Venezuela */}
        <TrainingSpots />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Join / Contact Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCourse={selectedCourse}
      />

      {/* Interactive Calendar 2026 Modal */}
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        onSelectActivityForBooking={handleBookFromCalendar}
      />
    </div>
  );
}

export default App;
