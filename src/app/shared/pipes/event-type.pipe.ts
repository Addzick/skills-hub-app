// Angular stuff
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'eventType'
})
export class EventTypePipe implements PipeTransform {
    transform(type: string, isFromCurrentUser: boolean, author: string): any {
        if (!type) { return type; }
        let result = isFromCurrentUser ? 'vous avez ' : `${ author } a `
        switch (type) {
            case 'article_created'        	: result +=  `crée un article`;break;
            case 'article_published'      	: result +=  `publié un article`;break;
            case 'article_commented'      	: result +=  `commenté cet article`;break;
            case 'article_liked'          	: result +=  `aimé cet article`;break;
            case 'proposition_created'		: result +=  `crée une proposition`;break;
            case 'proposition_published'	: result +=  `publié une proposition`;break;
            case 'proposition_accepted' 	: result +=  `accepté une proposition`;break;
            case 'proposition_rejected' 	: result +=  `rejeté une proposition`;break;
            case 'proposition_canceled' 	: result +=  `annulé une proposition`;break;
            case 'proposition_commented' 	: result +=  `commenté cette proposition`;break;
            case 'proposition_liked' 		: result +=  `aimé cette proposition`;break;
            case 'rating_created'        	: result +=  `crée une évaluation`;break;
            case 'rating_published'      	: result +=  `publié une évaluation`;break;
            case 'rating_commented'      	: result +=  `commenté cette évaluation`;break;
            case 'rating_liked'          	: result +=  `aimé cette évaluation`;break;
            case 'task_created'				: result +=  `crée une prestation`;break;
            case 'task_published'			: result +=  `publié une prestation`;break;
            case 'task_confirmed' 			: result +=  `confirmé une prestation`;break;
            case 'task_paid' 				: result +=  `payé une prestation`;break;
            case 'task_canceled' 			: result +=  `annulé une prestation`;break;
            case 'task_commented' 			: result +=  `commenté cette prestation`;break;
            case 'task_liked' 				: result +=  `aimé cette prestation`;break;
            case 'tender_created' 			: result +=  `crée un appel d'offres`;break;
            case 'tender_published'			: result +=  `publié un appel d'offres`;break;
            case 'tender_canceled' 			: result +=  `annulé un appel d'offres`;break;
            case 'tender_closed' 			: result +=  `cloturé un appel d'offres`;break;
            case 'tender_commented' 		: result +=  `commenté cet appel d'offres`;break;
            case 'tender_liked' 			: result +=  `aimé cet appel d'offres`;break;
            case 'user_registered'        	: result +=  `rejoint la communauté`;break;
            case 'user_updated'           	: result +=  `mis à jour ${ isFromCurrentUser ? 'votre' : 'son' } profil`;break;
            case 'user_connected'           : result +=  isFromCurrentUser ? `s'est connecté` : 'vous êtes connecté' ;break;
            case 'user_disconnected'       	: result +=  isFromCurrentUser ? `s'est déconnecté` : 'vous êtes déconnecté' ;break;
            default	                        : result +=  type;
        }

        return result;
    }
}
