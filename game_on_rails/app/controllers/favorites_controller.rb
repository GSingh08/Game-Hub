class FavoritesController < ApiController
    # GET /api/favorites
    before_action :require_login

    def index
      favorites = Favorite.all
      render json: { favorites: favorites }
    end

    def show
      favorite = Favorite.find(params[:id])
      favorite_user = favorite.user
      render json: { favorite: favorite, username: favorite_user.username }
    end

    def create
      favorite = Favorite.new(favorite_params)
      favorite.user = current_user

      if favorite.save
        render json: {
          message: 'ok',
          favorite: favorite,
        }
      else
        render json: {message: 'Could not create favorite'}
      end
    end

    private
    def favorite_params
      params.require(:favorite).permit(:name, :url)
    end


end
