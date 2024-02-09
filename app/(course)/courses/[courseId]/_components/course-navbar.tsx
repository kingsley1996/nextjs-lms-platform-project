import { NavbarRoutes } from '@/app/(dashboard)/_components/navbar-routes';
import { Chapter, Course, UserProgress } from '@prisma/client';

interface CourseNavbarProps {
  course: Course & {
    chapters: Chapter & {
      userProgress: UserProgress[] | null;
    };
  };
  progressCount: number;
}

export const CourseNavbar = ({ course, progressCount }: CourseNavbarProps) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <NavbarRoutes />
    </div>
  );
};
