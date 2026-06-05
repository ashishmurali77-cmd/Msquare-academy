'use server';
/**
 * @fileOverview An AI-powered personal mentor for stock market students.
 *
 * - aiPersonalMentor - A function that generates tailored mock exams and study recommendations.
 * - AIPersonalMentorInput - The input type for the aiPersonalMentor function.
 * - AIPersonalMentorOutput - The return type for the aiPersonalMentor function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIPersonalMentorInputSchema = z.object({
  studentName: z.string().describe("The student's name."),
  courseOutline: z.array(z.string()).describe("A list of all course topics/modules."),
  completedLessons: z.array(z.string()).describe("A list of lessons the student has completed."),
  quizScores: z.record(z.string(), z.number()).describe("An object mapping lesson/chapter names to their quiz scores (0-100)."),
  currentChapter: z.string().optional().describe("The current chapter or module the student is studying. If provided, tailor content to this area."),
});
export type AIPersonalMentorInput = z.infer<typeof AIPersonalMentorInputSchema>;

const AIPersonalMentorOutputSchema = z.object({
  mockExam: z.array(z.object({
    question: z.string().describe("The question for the mock exam."),
    options: z.array(z.string()).optional().describe("Multiple-choice options for the question, if applicable."),
    correctAnswer: z.string().describe("The correct answer to the question."),
    explanation: z.string().optional().describe("An explanation for the correct answer."),
    topic: z.string().describe("The topic or lesson covered by this question."),
  })).describe("A tailored mock exam based on student progress."),
  studyRecommendations: z.array(z.string()).describe("Personalized study recommendations based on identified weaknesses."),
  summaryOfStrengths: z.string().optional().describe("A brief summary of the student's strengths."),
  summaryOfWeaknesses: z.string().optional().describe("A brief summary of the student's weaknesses or areas for improvement."),
});
export type AIPersonalMentorOutput = z.infer<typeof AIPersonalMentorOutputSchema>;

export async function aiPersonalMentor(input: AIPersonalMentorInput): Promise<AIPersonalMentorOutput> {
  return aiPersonalMentorFlow(input);
}

const personalMentorPrompt = ai.definePrompt({
  name: 'personalMentorPrompt',
  input: { schema: AIPersonalMentorInputSchema },
  output: { schema: AIPersonalMentorOutputSchema },
  prompt: `You are an AI-powered personal mentor for a stock market academy. Your goal is to help students identify their weaknesses and provide tailored study recommendations and mock exams.

Here is the student's progress and course information:

Student Name: {{{studentName}}}
Course Outline: {{{json courseOutline}}}
Completed Lessons: {{{json completedLessons}}}
Quiz Scores: {{{json quizScores}}}
{{#if currentChapter}}
Currently focusing on: {{{currentChapter}}}
{{/if}}

Analyze the student's progress. Identify areas where they might be struggling based on lower quiz scores or uncompleted lessons, especially considering the overall course outline.

Based on this analysis, generate a tailored mock exam with 5-7 questions. These questions should primarily focus on topics where the student has shown weakness or lessons they have not yet completed. If a 'currentChapter' is provided, prioritize questions related to that chapter. Ensure the questions cover fundamental concepts and application. For each question, provide a correct answer and a brief explanation. Include multiple-choice options for some questions if appropriate, otherwise, make them open-ended.

Additionally, provide 3-5 specific study recommendations for the student. These recommendations should guide them to improve in their identified weak areas, suggesting specific lessons to revisit or concepts to focus on.

Finally, provide a brief summary of the student's strengths and weaknesses.`,
});

const aiPersonalMentorFlow = ai.defineFlow(
  {
    name: 'aiPersonalMentorFlow',
    inputSchema: AIPersonalMentorInputSchema,
    outputSchema: AIPersonalMentorOutputSchema,
  },
  async (input) => {
    const { output } = await personalMentorPrompt(input);
    return output!;
  }
);
