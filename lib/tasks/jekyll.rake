namespace :jekyll do
  desc 'Run Jekyll build and serve processes'
  task serve: :environment do
    dest = Rails.root.join('public/blog')

    options = {
      baseurl: '/blog',
      config: Rails.root.join('config', 'jekyll.yml').to_s,
      watch: true,
      port: 3000,
      source: Rails.root.join('blog').to_s,
      destination: dest.to_s,
      url: ENV["HOST"],
    }

    build = Thread.new { Jekyll::Commands::Build.process(options) }
    serve = Thread.new { Jekyll::Commands::Serve.process(options) }

    commands = [build, serve]
    commands.each { |c| c.join }
  end
end
