class Api::GodsController < ApplicationController

    def index
        gods = God.all
        render json: gods
    end

    def show 
        god = God.find_by(id: params[:id])
        render json: god
    end 

    def create
        god = God.create(god_params)
        render json: god
    end

    def destroy
        god = God.find_by(id: params[:id])
        god.destroy
        head :no_content
    end 


    private 

    def god_params
        params.permit(:name, :romanname, :power, :image)
    end

end
