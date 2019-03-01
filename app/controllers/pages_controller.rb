class PagesController < ApplicationController
  def react_blog
    @posts = Post.all
  end
  def vue_blog
    @posts = Post.all
  end
end
