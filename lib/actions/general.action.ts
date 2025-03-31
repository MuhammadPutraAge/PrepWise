"use server";

import { db } from "@/firebase/admin";

export const getInterviewByUserId = async (
  userId?: string
): Promise<Interview[] | null> => {
  if (!userId) {
    return null;
  }

  const interviews = await db
    .collection("interviews")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();

  return interviews.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as Interview[];
};

export const getLatestInterviews = async (
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> => {
  const { userId, limit = 20 } = params;

  if (!userId) {
    return null;
  }

  const interviews = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("finalized", "==", true)
    .where("userId", "!=", userId)
    .limit(limit)
    .get();

  return interviews.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as Interview[];
};

export const getInterviewById = async (
  id?: string
): Promise<Interview | null> => {
  if (!id) {
    return null;
  }

  const interview = await db.collection("interviews").doc(id).get();

  return interview.data() as Interview | null;
};
