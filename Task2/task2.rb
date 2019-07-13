class Hitung

  def segitiga

    print "Input Alas: "

    angka1 = gets.to_f

    print "Input Tinggi: "

    angka2 = gets.to_f

    hasil = (angka1*angka2)/2

    puts "Luas segitiga :  #{hasil}"

  end

  def lingkaran

    print "Input  Jari-jari: "

    jari = gets.to_f

    phi=3.14.to_f   

    hasil = phi*jari*jari

    puts "Luas nya #{hasil}"

  end

  def persegi_panjang

    print "Input Panjang: "

    panjang = gets.to_i

    print "Input Lebar: "

    lebar = gets.to_i

        

    hasil = panjang*lebar

    puts "Luas nya #{hasil}"

  end

  def limas

    print "Input Sisi Alas: "

    alas = gets.to_f

    print "Input Tinggi Segitiga: "

    tinggi = gets.to_f

            

    hasil = alas*alas+(alas*tinggi/2)*4

    puts "Luas nya #{hasil}"

  end

  def balok

    print "Input Panjang: "

    panjang = gets.to_i

    print "Input Lebar: "

    lebar = gets.to_i

    print "Input Tinggi: "

    tinggi = gets.to_i

            

    hasil = (2*(panjang*lebar)+2*(panjang*tinggi)+2*(lebar*tinggi))

    puts "Luas nya #{hasil}"

    end

  def bola

    print "Input Jari-jari: "

    jaribo = gets.to_f
    phi = 3.14.to_f
            

    hasil = 4*phi*jaribo*jaribo

    puts "Luas nya #{hasil}"

  end

end



if __FILE__ == $0

  p=0  
  while p !=7 

     puts " "

      puts "===========*****============"

     puts "Menghitung Luas Bangun"
      puts "Dibuat Oleh : Yuliandini"

     puts "===========*****============"
      puts "   "

      puts "1. Segitiga"

     puts "2. Lingkaran"

     puts "3. Persegi Panjang"

      puts "4. Limas"

      puts "5. Balok"

     puts "6. Bola" 

      puts "7. Keluar" 

      puts "============================"

      print "Masukan Pilihan Anda: "

     angka = gets.to_i

    

  

      pil = Hitung.new

      if angka == 1

      pil.segitiga

     elsif angka == 2

      pil.lingkaran

     elsif angka == 3

      pil.persegi_panjang

     elsif angka == 4

      pil.limas

     elsif angka == 5

      pil.balok

     elsif angka == 6

      pil.bola

     elsif angka == 7

      exit

     else

      puts "Anda salah memasukan angka !"

      exit

      end
    
      
      

  end
 
end