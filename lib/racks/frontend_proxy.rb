# frozen_string_literal: true

require "net/http"
require "uri"

# FrontendProxy is a Rack server
# to get frontend files via webpack-dev-server.
class FrontendProxy
  def initialize
    @webpack_url = URI.parse("http://localhost:3001")
  end

  def call(env)
    res = Net::HTTP.start(@webpack_url.host, @webpack_url.port) do |http|
      http.get(env["PATH_INFO"])
    end
    [res.code, res.to_hash, [res.body]]
  end
end
