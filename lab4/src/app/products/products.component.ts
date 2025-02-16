import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  categories = [
    {
      name: 'Gadgets',
      products: [
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
          name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
          description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой.',
          rating: 4.5,
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
          name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
          description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности. Удобные способы оставаться на связи. Более быстрый двухъядерный процессор для повышенной производительности. Apple Watch SE полны достоинств, а теперь это ещё более выгодная покупка, чем когда‑либо.',
          rating: 4.2,
          link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
          name: 'Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
          description: 'Как и предыдущая версия, наушники снабжены активным шумоподавлением, но теперь инженеры Apple улучшили в новых аирподсах режим прозрачности, который еще лучше отсекает лишние шумы, при этом позволяя слышать происходящее вокруг. Улучшилась и функция Spatial Audio для пространственного звучания с отслеживанием положения головы слушателя. Встроенные аккумуляторы наушников теперь обеспечивают до 6 часов воспроизведения музыки и до 30 часов с подзарядкой в кейсе со включенным активным шумоподавлением. В режиме разговора время работы немного меньше: до 4,5 часов и до 24 часов с подзарядкой в кейсе. Быстрая зарядка позволяет подзарядить наушники на час работы всего за пять минут.',
          rating: 4.7,
          link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000'
        }
      ]
    },
    {
      name: 'Clothes',
      products: [
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h99/85838094467102.jpg?format=gallery-medium',
          name: 'Футболка серый',
          description: 'Эта постиранная хлопковая футболка изготовлена из высококачественного хлопка. Ткань очень мягкая и приятная для кожи, свободная, дышащая и удобная в носке.',
          rating: 4.3,
          link: 'https://kaspi.kz/shop/p/futbolka-730323194-seryi-s-118741292/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h2f/84779982192670.jpg?format=gallery-medium',
          name: 'Джинсы джинсы-мом Denim голубой',
          description: 'Slim fit jeans made from high-quality denim.',
          rating: 4.6,
          link: 'https://kaspi.kz/shop/p/dzhinsy-dzhinsy-mom-denim-9194-goluboi-w27-115650378/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h3d/86680739282974.jpg?format=gallery-medium',
          name: 'Бомбер белый',
          description: 'Warm and stylish winter jacket.',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/bomber-331205817-belyi-s-122015829/?c=750000000'
        }
      ]
    },
    {
      name: 'Household Appliances',
      products: [
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium',
          name: 'Электрочайник Yingzheng ZY-305 черный',
          description: 'Современный и стильный, этот электрический чайник сочетает в себе элегантный дизайн и передовые функции для вашего удобства. Изготовленный из высококачественного боросиликатного стекла, он не только устойчив к высоким температурам, но и позволяет наблюдать за процессом кипячения. Световой индикатор синего цвета добавляет современный акцент, а пластиковые детали из черного полипропилена обеспечивают долговечность и безопасность в использовании.',
          rating: 4.3,
          link: 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium',
          name: 'Блендер Slaouwo HB-2075 черный',
          description: 'Характеристики Цвет черный',
          rating: 4.6,
          link: 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h2c/hec/79996057780254.jpg?format=gallery-medium',
          name: 'Настольная электропечь DAUSCHER DMO-3600RE красный',
          description: 'Характеристики Цвет красный',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/dauscher-dmo-3600re-krasnyi-109849401/?c=750000000'
        }
      ]
    },
    {
      name: 'Accessories',
      products: [
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h19/h4d/87040702578718.jpg?format=gallery-medium',
          name: 'Сумка кросс-боди 7456 black1 искусственная кожа черный',
          description: 'Характеристики Для кого - для женщин, Цвет - черный',
          rating: 4.3,
          link: 'https://kaspi.kz/shop/p/sumka-kross-bodi-7456-black1-iskusstvennaja-kozha-chernyi-109405033/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h4d/84656597139486.jpg?format=gallery-medium',
          name: 'Рюкзак полиэстер, оксфорд черный',
          description: 'Характеристики Цвет черный',
          rating: 4.6,
          link: 'https://kaspi.kz/shop/p/rjukzak-15378081-ids21090702-poliester-oksford-chernyi-109556758/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h13/84065971601438.png?format=gallery-medium',
          name: 'Часы Кварцевые FOURRON 6846000_55 сталь',
          description: 'Современный Стиль и Надежность с Fourron: Надёжный механизм в Металлическом Корпусе с Чёрным Циферблатом и календарём ! Вы ищете идеальный подарок для себя или близкого человека? Хотите придать своему стилю новую нотку утонченности? Fourron приглашает вас в мир высокого качества и изысканного дизайна с нашим календарём в металлическом корпусе и чёрным циферблатом!',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/kvartsevye-fourron-6846000-55-stal--113577617/?c=750000000'
        }
      ]
    },
    {
      name: 'Computers',
      products: [
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h81/68183487119390.jpg?format=gallery-medium',
          name: 'Системный блок Empire Computers i5-10400F/ GTX 1660 Super/ 16GB/ 512 GB SSD/ Win 10',
          description: 'Особенности Форм-фактор корпуса - Midi-Tower, Комплектация - кабель питания, Цвет - черный',
          rating: 4.3,
          link: 'https://kaspi.kz/shop/p/empire-computers-i5-10400f-gtx-1660-super-16gb-512-gb-ssd-win-10-108560461/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h6d/64392202190878.jpg?format=gallery-medium',
          name: 'Системный блок Mechanic stell i5-10400F/ GTX 1660 Ti/ 16GB/ 519 999GB HDD+SSD/ Win 10',
          description: 'Особенности Форм-фактор корпуса - Midi-Tower, Комплектация - кабель питания, Цвет - черный',
          rating: 4.6,
          link: 'https://kaspi.kz/shop/p/mechanic-stell-i5-10400f-gtx-1660-ti-16gb-519-999gb-hdd-ssd-win-10-103932924/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p22/p71/22919765.jpg?format=gallery-medium',
          name: 'Системный блок Tehnicom i5-12400F/ RTX 4060 Ti/ 32GB/ 1000 SSD/ Win 10',
          description: 'Выгодный игровой набор!Монитор 24 диагональ 240герцВ комплекте клавиатура, мышь, наушники, и сам системный блок, который будет актуален еще в ближайшие 5 лет!Системный блок собран, оптимизирован и настроен!Все комплектующие новые!Гарантия 12 месяцев!',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/tehnicom-i5-12400f-rtx-4060-ti-32gb-1000-ssd-win-10-121751167/?c=750000000'
        }
      ]
    }
  ];

  shareOnWhatsApp(product: any) {
    const link_wa = `https://api.whatsapp.com/send?text=Check out this product: ${product.name} Click here: ${product.link}`;
    window.open(link_wa, '_blank');
  }

  shareOnTelegram(product: any) {
    const link_tg = `https://t.me/share/url?url=${product.link}&text=Check out this product: ${product.name}`;
    window.open(link_tg, '_blank');
  }
}