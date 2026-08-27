import type { CompetenceEvaluee } from './CompetenceEvaluee'

export interface ProjectModel {
  nom : string;
  description: string;
  image: string;
  logo: string;
  longDescription : string;
  imagesPaths: string[];
  contexte: string;
  realisation: string;
  stack: string[];
  competencesEvaluees: CompetenceEvaluee[];
}
