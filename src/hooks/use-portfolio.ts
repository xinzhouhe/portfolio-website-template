import { useQuery } from "@tanstack/react-query";
import { profile, education, research, projects, courses, news, students, services, talks, awards, grants } from "@/data/portfolio";
import { publications } from "@/data/publications";

// Keep the same hook API as the Replit template, but read from local static data.
// This preserves appearance/behavior and removes the need for a backend/database.

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => profile,
    staleTime: Infinity,
  });
}

export function useEducation() {
  return useQuery({
    queryKey: ["education"],
    queryFn: async () => education,
    staleTime: Infinity,
  });
}

export function useResearch() {
  return useQuery({
    queryKey: ["research"],
    queryFn: async () => research,
    staleTime: Infinity,
  });
}

export function usePublications() {
  return useQuery({
    queryKey: ["publications"],
    queryFn: async () => publications,
    staleTime: Infinity,
  });
}

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => projects,
    staleTime: Infinity,
  });
}

export function useCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => courses,
    staleTime: Infinity,
  });
}

export function useNews() {
  return useQuery({
    queryKey: ["news"],
    queryFn: async () => news,
    staleTime: Infinity,
  });
}

export function useStudents() {
  return useQuery({
    queryKey: ["students"],
    queryFn: async () => students,
    staleTime: Infinity,
  });
}

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: async () => services,
    staleTime: Infinity,
  });
}

export function useFeaturedPublications() {
  return useQuery({
    queryKey: ["featured-publications"],
    queryFn: async () => publications.filter((p) => p.featured),
    staleTime: Infinity,
  });
}

export function useTalks() {
  return useQuery({
    queryKey: ["talks"],
    queryFn: async () => talks,
    staleTime: Infinity,
  });
}

export function useAwards() {
  return useQuery({
    queryKey: ["awards"],
    queryFn: async () => awards,
    staleTime: Infinity,
  });
}

export function useGrants() {
  return useQuery({
    queryKey: ["grants"],
    queryFn: async () => grants,
    staleTime: Infinity,
  });
}
