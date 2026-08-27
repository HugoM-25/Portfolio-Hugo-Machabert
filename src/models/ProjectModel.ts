import type { CompetenceEvaluee } from './CompetenceEvaluee'

export interface ProjectModel {
  nom : string;
  description: string;
  image: string;
  longDescription : string;
  imagesPaths: string[];
  contexte: string;
  realisation: string;
  competencesEvaluees: CompetenceEvaluee[];
}
