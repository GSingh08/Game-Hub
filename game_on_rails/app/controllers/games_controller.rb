class GamesController < ApplicationController
  # /games
  def index
    @games = Game.all
    render json: {
      entities: @games
    }
  end

  # /games/id
  def show
    @games = Game.find(params[:id])
  end

  # /games/new
  def create
    @games = Game.new(game_params)
  if  @games.save
      redirect_to games_path
    else
      render json: {
        message: "Sorry, Something Went Wrong!"
      }
    end
  end

  def destroy
    @games = Game.find(params[:id])
    @games.destroy
    render json: {
      message: "Game Destroyed"
    }
  
end

  private

  def game_params
    params.permit(:name, :description, :image, :release_date)
  end
end
