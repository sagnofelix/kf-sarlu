import React, { useState } from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import '../styles/collaboration.css'; // Import the CSS file

// Define the prop types for the RatingStars component
interface RatingStarsProps {
  rating: number;
}

// Composant pour afficher une étoile de notation
const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star 
          key={star} 
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`} 
          fill={star <= rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
};

// Define the review type
interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  transaction: string;
  comment: string;
  likes: number;
  dislikes: number;
}

// Composant principal des revues
const CollaborationPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      author: 'SIDIBE Lancine.',
      date: '15 Nov 2024',
      rating: 5,
      transaction: 'Achat de 100g d\'or',
      comment: 'Processus de transaction très transparent et rapide. Très satisfait !',
      likes: 24,
      dislikes: 2
    },
    {
      id: 2,
      author: 'SAGNO Felix.',
      date: '10 Nov 2024',
      rating: 4,
      transaction: 'Vente de lingots d\'or',
      comment: 'Bon service client, prix compétitifs. Quelques petits points à améliorer.',
      likes: 15,
      dislikes: 3
    },
    {
      id: 3,
      author: 'DIALLO Ibrahima.',
      date: '5 Nov 2024',
      rating: 5,
      transaction: 'Achat de pièces d\'or',
      comment: 'Authentification impeccable, livraison sécurisée. Je recommande !',
      likes: 42,
      dislikes: 1
    }
  ]);

  const [newReview, setNewReview] = useState<Omit<Review, 'id' | 'date' | 'likes' | 'dislikes'>>({
    author: '',
    rating: 0,
    transaction: '',
    comment: ''
  });

  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newReview.author || !newReview.comment || newReview.rating === 0) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    const submittedReview: Review = {
      ...newReview,
      id: reviews.length + 1,
      date: new Date().toLocaleDateString('fr-FR'),
      likes: 0,
      dislikes: 0
    };

    setReviews([submittedReview, ...reviews]);
    setNewReview({ author: '', rating: 0, transaction: '', comment: '' });
  };

  const handleLikeDislike = (reviewId: number, type: 'likes' | 'dislikes') => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { 
            ...review, 
            [type]: review[type] + 1 
          } 
        : review
    ));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Avis sur nos Transactions d'Or
      </h2>

      {/* Formulaire de nouvelle revue */}
      <form onSubmit={handleReviewSubmit} className="mb-6 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Déposez votre avis</h3>
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Votre nom" 
            value={newReview.author}
            onChange={(e) => setNewReview({...newReview, author: e.target.value})}
            className="border p-2 rounded"
          />
          <select 
            value={newReview.transaction}
            onChange={(e) => setNewReview({...newReview, transaction: e.target.value})}
            className="border p-2 rounded"
          >
            <option value="">Type de transaction</option>
            <option value="Achat de lingots">Achat de lingots</option>
            <option value="Vente de lingots">Vente de lingots</option>
            <option value="Achat de pièces">Achat de pièces</option>
            <option value="Vente de pièces">Vente de pièces</option>
          </select>
        </div>
        <div className="mt-4">
          <textarea 
            placeholder="Votre avis..." 
            value={newReview.comment}
            onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
            className="w-full border p-2 rounded h-24"
          ></textarea>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span>Note :</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={`w-6 h-6 cursor-pointer ${star <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                fill={star <= newReview.rating ? 'currentColor' : 'none'}
                onClick={() => setNewReview({...newReview, rating: star})}
              />
            ))}
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Soumettre
          </button>
        </div>
      </form>

      {/* Liste des revues */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{review.author}</span>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <RatingStars rating={review.rating} />
            </div>
            <p className="text-gray-700 mb-2">
              <strong>Transaction :</strong> {review.transaction}
            </p>
            <p className="mb-2">{review.comment}</p>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handleLikeDislike(review.id, 'likes')}
                className="flex items-center space-x-1"
              >
                <ThumbsUp className="w-4 h-4 text-green-500" />
                <span>{review.likes}</span>
              </button>
              <button 
                onClick={() => handleLikeDislike(review.id, 'dislikes')}
                className="flex items-center space-x-1"
              >
                <ThumbsDown className="w-4 h-4 text-red-500" />
                <span>{review.dislikes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationPage;
