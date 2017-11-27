// Angular stuff
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'eventType'
})
export class EventTypePipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!value) { return value; }

        switch (value) {
            case 'article_created'        	: return `a crée un article`;
            case 'article_published'      	: return `a publié un article`;
            case 'article_commented'      	: return `a commenté cet article`;
            case 'article_liked'          	: return `a aimé cet article`;
            case 'proposition_created'		: return `a crée une proposition`;
            case 'proposition_published'	: return `a publié une proposition`;
            case 'proposition_accepted' 	: return `a accepté une proposition`;
            case 'proposition_rejected' 	: return `a rejeté une proposition`;
            case 'proposition_canceled' 	: return `a annulé une proposition`;
            case 'proposition_commented' 	: return `a commenté cette proposition`;
            case 'proposition_liked' 		: return `a aimé cette proposition`;
            case 'rating_created'        	: return `a crée une évaluation`;
            case 'rating_published'      	: return `a publié une évaluation`;
            case 'rating_commented'      	: return `a commenté cette évaluation`;
            case 'rating_liked'          	: return `a aimé cette évaluation`;
            case 'task_created'				: return `a crée une prestation`;
            case 'task_published'			: return `a publié une prestation`;
            case 'task_confirmed' 			: return `a confirmé une prestation`;
            case 'task_paid' 				: return `a payé une prestation`;
            case 'task_canceled' 			: return `a annulé une prestation`;
            case 'task_commented' 			: return `a commenté cette prestation`;
            case 'task_liked' 				: return `a aimé cette prestation`;
            case 'tender_created' 			: return `a crée un appel d'offres`;
            case 'tender_published'			: return `a publié un appel d'offres`;
            case 'tender_canceled' 			: return `a annulé un appel d'offres`;
            case 'tender_closed' 			: return `a cloturé un appel d'offres`;
            case 'tender_commented' 		: return `a commenté cet appel d'offres`;
            case 'tender_liked' 			: return `a aimé cet appel d'offres`;
            case 'user_registered'        	: return `a rejoint la communauté`;
            case 'user_updated'           	: return `a mis à jour son profil`;
            case 'user_login'             	: return `s'est connecté`;
            case 'user_logout'            	: return `s'est déconnecté`;
            default	                        : return value;
        }
    }
}
