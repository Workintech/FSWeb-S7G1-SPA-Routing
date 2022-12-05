# Client Side Routing(İstemci Tarafı Rotalama) w/ React Router v.5

Konular:

* React Router
* Link ve NavLink kullanarak belirli routelara bağlantı vermek
* Route Parametreleri Atama
* Bileşenlere Proplar göndererek Router render etme

## Talimatlar

### Görev 1: Proje Kurulumu

* [ ] Repoyu **Forklayın** , ve forku klonlayın.
* [ ] **Not** Çalıştıracağınız 2 server var o yüzden talimatları dikkatlice okuyun.
* [ ] **Root klasöründe**: `npm install` yazarak bağımlılıkları indirin.
* [ ] `npm start` ya da `node server.js` komutuyla çalıştırın. (Bu işlemi neden yaptığımız konusunda endişelenmeyin, bu konuyla ilgili ilerleyen adımlarda daha açıklayıcı bilgiler bulacaksın).
* [ ] Başka bir terminal penceresinde `client` klasörüne girin ve `npm install` yazarak bağımlılıklarını indirin.
* [ ] `client` klasöründeyken `npm start` yazarak client uygulamasını çalıştırın.

* [ ] Öncelikle uygulamanız client üzerinden çalışmaya başlayınca şuradaki gibi bir tarayıcı penceresi göreceksiniz:  [bknz](./Assets/filmler-anasayfa.png) `localhost:3000` (eğer 3000 kullanılıyorsa port numarası farklı olabilir).

### Görev 2: MVP (MUÜ)

#### Tasarım Dosyaları

Uygulamanızı bitirdiğinizde 2 adet route'u olacaktır:

* [ ] [route SS'/'](./Assets/ilk-route.png)
* [ ] [route SS '/filmler/:id'](./Assets/ikinci-route.png)

#### Routeların uygulanması

* [ ] Routerlarla app'i düzenleyin.
* [ ] App dosyanıza 2 adet route ekleyin.
  * [ ] birinci route'unuz `/` olacak ve `FilmListesi` bileşenini yükleyecek. Bu bileşene proplarla filmler apisinden alınan datayı aktarın.
  * [ ] diğer route `/filmler/` parametresinden sonra `id` parametresini alacak  (örnek: `/filmler/2`, `/filmler/3` id dinamik olacak). Bu route `Film` bileşenini yükleyecek.

#### İşlevsellik Kazandırın

* [ ] Bir kullanıcı `FilmListesi` içindeki film cardına tıkladığında seçilen filmin detaylarını görebilmeli {`/movies/{tıklanılan film idsi}`.
* [ ] URL'den seçilen film idsini almak için `Film.js` dosyasının 7. satırını düzenlenemeniz gerekir.
* [ ] `KaydedilenlerListesi` bileşindeki `AnaSayfa` butonuna işlevsellik kazındırın, Anasayfaya geri dönmeli.
* [ ] Artık fil listesinde ileri geri ilerleyebiliyor olmalısın ve bir filmin detaylarını görebilmelisin.

### Görev 3: Esnek görevler

Eğer Görev 1 ve 2'yi tamamladıktan sonra bu göreve geçebilirsin.

#### Kodumuzu DRY olacak şekilde düzenleyin

* [ ] `Film`, `FilmDetayları` ve `FilmListesi` bileşenleri içindeki JSX'lerin oldukça benzer olduğunu farketmişsindir. `Film` bileşeninde "detaylı" görünümünde bulunan ana farklılık starların listesidir.
* [ ] `FilmCard.js` içinde bir Film Card'ı döndüren bir bileşen oluşturun. `Film` ve `FilmDetayları` bileşenlerini kaldırıp, yeni oluşturduğunuz `FilmCard` bileşeniyle uygulamayı yeniden geliştirin.
* [ ] Film Card, bir filmi star listesi olsun ya da olmasın görüntülemeye yetecek kadar esnek olmalıdır.

#### `Film Kaydet` işlevini ekleyin

* [ ] Halihazırda kullanmadığımız bir `Kaydedilenler Listesi` bileşenimizin olduğunu fark etmişsindir. Bu adımda bir film kaydetmek için bir işlevsellik ekleyeceksin. `Film` bileşenine `KaydedilenlerListesineEkle` fonksiyonunu gönderin. Daha sonra `Kaydet` butonuna bir click handler ekleyin. `Film.js` içindeki 24-27 satır arasındaki kodun başındaki yorum etiketini kaldırman gerekmektedir.

#### Kaydedilen Film listesini `Link` e çevirin

* [ ] Kaydedilen filmler, filmin kendisine linklenmelidir. `filmiKaydet` fonksiyonunun ne işe yaradığını düşünün.

#### Kaydedilen Film `Link` lerini `NavLink`e dönüştürün

* [ ] Navlink
