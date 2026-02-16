# Hospital Appointment Scheduler - Frontend Challenge

## 🎯 Challenge Overview

Build a hospital appointment scheduling interface that displays doctor appointments in day and week calendar views.

**Time**: 3-4 hours
**Focus**: Architecture, design patterns, calendar rendering
**Framework**: Next.js 14 + TypeScript

---

## 📋 Scenario

You're building an internal hospital scheduling system. The hospital has:
- **3 Doctors** with different specialties and working hours
- **50 Patients** with various appointments
- **Appointments** scheduled throughout the week

**User Roles**:
- **Front Desk Staff**: Can view all doctors' schedules
- **Doctors**: Can view only their own schedule

---

## ✅ What We've Provided

We've set up the foundation so you can focus on architecture and implementation:

- ✅ Next.js 14 project with TypeScript
- ✅ Complete type definitions (`types/index.ts`)
- ✅ Mock data for 3 doctors, 50 patients, and appointments (`data/mockData.ts`)
- ✅ Basic project structure
- ✅ Component skeletons (TO BE IMPLEMENTED)

---

## 🎯 Your Task

### Core Requirements (Must Complete)

#### 1. **Architecture & Design** (30%)
Demonstrate clean architecture patterns:
- Separation of concerns (domain, services, UI)
- Reusable, composable components
- Headless logic (hooks) separated from presentation
- Service layer for data access

#### 2. **Day View Calendar** (25%)
Display appointments for a selected doctor on a selected date:
- Time slots from 8 AM to 6 PM (30-minute intervals)
- Show appointments in their correct time slots
- Display patient name, appointment type, and duration
- Color-coded by appointment type
- Handle overlapping appointments gracefully

#### 3. **Week View Calendar** (25%)
Display appointments for a selected doctor across 7 days:
- Monday through Sunday
- Same time range (8 AM - 6 PM)
- Appointments positioned correctly by day and time
- Responsive layout

#### 4. **Role-Based Filtering** (20%)
- Dropdown to select doctor (for front desk staff view)
- Display doctor's name, specialty, and working hours
- Filter appointments by selected doctor

---

## 🏗️ Expected Architecture

We're evaluating your ability to structure frontend code following modern patterns:

### Must Demonstrate

1. **Headless Components / Custom Hooks**
   ```typescript
   // Separate business logic from UI
   function useAppointmentScheduler(doctorId: string, date: Date) {
     // Logic here
     return { appointments, timeSlots, loading, error };
   }
   ```

2. **Service Layer**
   ```typescript
   // Abstract data access
   class AppointmentService {
     getAppointmentsByDoctorAndDate(doctorId: string, date: Date): Appointment[]
   }
   ```

3. **Composable Components**
   ```tsx
   <ScheduleView>
     <ScheduleHeader />
     <TimelineGrid />
     <AppointmentList />
   </ScheduleView>
   ```

4. **Domain Models (Optional but Encouraged)**
   ```typescript
   class TimeSlot {
     constructor(public start: Date, public end: Date) {}
     overlaps(other: TimeSlot): boolean { }
   }
   ```

---

## 📁 Project Structure

```
app/
├── page.tsx                    # Main page (minimal, provided)
├── schedule/
│   └── page.tsx               # Schedule page (TO BE IMPLEMENTED)
├── components/
│   ├── ScheduleView.tsx       # Main schedule component (SKELETON)
│   ├── DayView.tsx            # Day calendar view (TO BE IMPLEMENTED)
│   ├── WeekView.tsx           # Week calendar view (TO BE IMPLEMENTED)
│   ├── DoctorSelector.tsx     # Doctor dropdown (TO BE IMPLEMENTED)
│   └── ui/                    # Reusable UI components
├── hooks/
│   └── useAppointments.ts     # Custom hooks (TO BE IMPLEMENTED)
├── services/
│   └── appointmentService.ts  # Data service (TO BE IMPLEMENTED)
├── domain/                     # Domain models (OPTIONAL)
│   ├── Appointment.ts
│   └── TimeSlot.ts
├── types/
│   └── index.ts               # ✅ Type definitions (PROVIDED)
└── data/
    └── mockData.ts            # ✅ Mock data (PROVIDED)
```

---

## 🎨 UI Requirements

### Day View
```
┌─────────────────────────────────────────┐
│  Dr. Sarah Chen - Cardiology            │
│  [Date Picker] [Week View Button]       │
├─────────┬───────────────────────────────┤
│  8:00   │                               │
│  8:30   │  [John Doe - Checkup]         │
│  9:00   │  [30 min]                     │
│  9:30   │                               │
│ 10:00   │  [Jane Smith - Consultation]  │
│ 10:30   │  [60 min]                     │
│ 11:00   │                               │
│ 11:30   │                               │
│   ...   │                               │
└─────────┴───────────────────────────────┘
```

### Week View
```
┌────────────────────────────────────────────────────────┐
│  Dr. Sarah Chen - Cardiology                           │
│  Oct 14-20, 2024  [Day View Button]                   │
├──────┬───────┬───────┬───────┬───────┬───────┬───────┤
│ Time │  Mon  │  Tue  │  Wed  │  Thu  │  Fri  │  Sat  │
├──────┼───────┼───────┼───────┼───────┼───────┼───────┤
│ 8:00 │       │       │       │       │       │       │
│ 9:00 │ [Apt] │       │ [Apt] │       │       │       │
│10:00 │       │ [Apt] │       │ [Apt] │       │       │
│11:00 │       │       │       │       │       │       │
│  ... │       │       │       │       │       │       │
└──────┴───────┴───────┴───────┴───────┴───────┴───────┘
```

### Visual Design
- Use color coding for appointment types:
  - Checkup: Blue (#3b82f6)
  - Consultation: Green (#10b981)
  - Follow-up: Orange (#f59e0b)
  - Procedure: Purple (#8b5cf6)
- Show loading states while fetching data
- Handle empty states (no appointments)
- Responsive design (works on mobile and desktop)

---

## ⏰ Time Budget Guidance

**Total: 3-4 hours**

- 30 min - Review requirements, understand mock data, plan architecture
- 30 min - Set up services, hooks, domain models (architecture)
- 60 min - Implement Day View calendar
- 60 min - Implement Week View calendar
- 30 min - Polish, testing, documentation

---

## 🎯 Evaluation Criteria

| Criterion | Weight | What We're Looking For |
|-----------|--------|----------------------|
| **Architecture & Design** | 35% | - Clean separation of concerns<br>- Service layer implementation<br>- Headless hooks pattern<br>- Reusable components |
| **Day View Implementation** | 25% | - Correct time slot rendering<br>- Accurate appointment positioning<br>- Handles overlaps<br>- Visual clarity |
| **Week View Implementation** | 20% | - 7-day grid layout<br>- Correct date/time positioning<br>- Responsive design |
| **Code Quality** | 20% | - TypeScript usage<br>- Clean, readable code<br>- Component composition<br>- No anti-patterns |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

### 3. Explore Provided Code

**Start here**:
- `types/index.ts` - Understand the data models
- `data/mockData.ts` - See the available data
- `app/schedule/page.tsx` - Your main entry point

### 4. Implement Components

Follow this order:
1. Create `appointmentService.ts` - Data access layer
2. Create `useAppointments.ts` hook - Business logic
3. Implement `DayView.tsx` - Day calendar
4. Implement `WeekView.tsx` - Week calendar
5. Implement `DoctorSelector.tsx` - Doctor filter
6. Polish `ScheduleView.tsx` - Main composition

---

## 📝 Submission Requirements

### Must Include

1. **Working Application**
   - All core features functional
   - No console errors
   - Runs with `npm run dev`

2. **Clean Code**
   - TypeScript (no `any` types)
   - Consistent formatting
   - Meaningful variable names

3. **Architecture**
   - Service layer implemented
   - Custom hooks for business logic
   - Components are composable

4. **README Updates**
   Add to this README:
   - **Architecture Decisions**: Explain your key design choices
   - **Component Structure**: Describe your component hierarchy
   - **Trade-offs**: What would you improve with more time?

---

## 💡 Hints & Tips

### Time Slot Generation
```typescript
// Generate 30-minute time slots from 8 AM to 6 PM
function generateTimeSlots(date: Date): TimeSlot[] {
  const slots = [];
  for (let hour = 8; hour < 18; hour++) {
    for (let minute of [0, 30]) {
      const start = new Date(date);
      start.setHours(hour, minute, 0, 0);
      // ...
    }
  }
  return slots;
}
```

### Appointment Positioning
```typescript
// Find appointments that fit in a specific time slot
function getAppointmentsForSlot(
  appointments: Appointment[],
  slotStart: Date
): Appointment[] {
  return appointments.filter(apt => {
    const aptStart = new Date(apt.startTime);
    const aptEnd = new Date(apt.endTime);
    // Does appointment overlap with this slot?
  });
}
```

### Date Utilities
Consider using `date-fns` (already in package.json):
```typescript
import { format, addDays, isSameDay } from 'date-fns';
```

---

## 📚 Libraries & Tools

### You May Use:
- ✅ **Calendar/Date Libraries**: react-big-calendar, FullCalendar, @tanstack/react-table, etc.
- ✅ **UI Component Libraries**: shadcn/ui, Radix UI, Headless UI, etc.
- ✅ **Utility Libraries**: lodash, ramda, date-fns (already included), etc.
- ✅ **AI Coding Assistants**: GitHub Copilot, ChatGPT, Claude, etc.

**What We're Evaluating:**
- Understanding of library APIs and integration
- Ability to customize and adapt libraries to requirements
- Clean integration with your architecture
- Proper TypeScript usage with third-party libraries

### Using AI Tools:
We understand AI tools are part of modern development. Feel free to use them! What matters is:
- ✅ You understand the code AI generates
- ✅ You can explain your architectural decisions
- ✅ You adapt and customize AI-generated code appropriately
- ✅ Please mention in SUBMISSION.md which AI tools you used and how

**Pro tip:** Using a well-integrated calendar library with clean architecture often demonstrates better engineering judgment than building from scratch under time pressure.

---

## ❌ What NOT to Do

- ❌ Don't build drag-and-drop (out of scope)
- ❌ Don't implement appointment creation/editing
- ❌ Don't add authentication/authorization
- ❌ Don't build a backend API

---

## ✅ Bonus Features (If Time Permits)

- Current time indicator (red line showing current time)
- Appointment search/filter
- Multiple doctor view (side-by-side comparison)
- Print-friendly view
- Dark mode
- Accessibility improvements (ARIA labels, keyboard navigation)

---

## 🤔 Questions?

If requirements are unclear, make reasonable assumptions and document them in your README.

**Remember**: We value **quality over quantity**. A well-architected partial solution is better than a rushed complete one.

---

If you encounter setup issues:
- Check Node version (18+)
- Try `rm -rf node_modules && npm install`
- Check console for errors

Good luck! 🚀
