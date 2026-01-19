import { Membership, formatMembershipDate, getDaysUntilExpiration } from '@/lib/membership'
import { AlertCircle, CheckCircle, Clock } from 'lucide-react'

interface MembershipStatusProps {
    membership: Membership | null
    onSubscribe?: () => void
}

export default function MembershipStatus({ membership, onSubscribe }: MembershipStatusProps) {
    if (!membership || membership.status !== 'active') {
        return (
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-yellow-900 mb-2">
                            Adhésion non active
                        </h3>
                        <p className="text-yellow-800 mb-4">
                            Pour accéder à l'ensemble du contenu membre, vous devez souscrire à l'adhésion annuelle.
                        </p>
                        {onSubscribe && (
                            <button
                                onClick={onSubscribe}
                                className="bg-berny-navy hover:bg-berny-navy/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                            >
                                Adhérer maintenant
                            </button>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    const daysRemaining = getDaysUntilExpiration(membership.end_date)
    const isExpiringSoon = daysRemaining <= 30 && daysRemaining > 0

    return (
        <div className={`border-2 rounded-lg p-6 ${isExpiringSoon
                ? 'bg-orange-50 border-orange-200'
                : 'bg-green-50 border-green-200'
            }`}>
            <div className="flex items-start gap-4">
                {isExpiringSoon ? (
                    <Clock className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                ) : (
                    <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                )}
                <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 ${isExpiringSoon ? 'text-orange-900' : 'text-green-900'
                        }`}>
                        {isExpiringSoon ? 'Adhésion expire bientôt' : 'Adhésion active'}
                    </h3>
                    <div className="space-y-1">
                        <p className={isExpiringSoon ? 'text-orange-800' : 'text-green-800'}>
                            <strong>Valide jusqu'au :</strong> {formatMembershipDate(membership.end_date)}
                        </p>
                        <p className={isExpiringSoon ? 'text-orange-800' : 'text-green-800'}>
                            <strong>Jours restants :</strong> {daysRemaining} jour{daysRemaining > 1 ? 's' : ''}
                        </p>
                    </div>
                    {isExpiringSoon && onSubscribe && (
                        <button
                            onClick={onSubscribe}
                            className="mt-4 bg-berny-navy hover:bg-berny-navy/90 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                        >
                            Renouveler l'adhésion
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
