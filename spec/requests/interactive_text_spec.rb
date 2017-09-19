require 'rails_helper'

describe 'Interactive Text' do
  context 'intro' do
    it 'gets the introductory text' do
      get '/interactive_text?text_index=0'
      expect(response_json['text']).to match I18n.t('interactive_text.0')
    end
  end
end
