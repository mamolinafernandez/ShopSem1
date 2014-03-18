json.array!(@orders) do |order|
  json.extract! order, :id, :status, :payment_method, :customer_name, :customer_surname, :shipping_address, :shipping_city
  json.url order_url(order, format: :json)
end
