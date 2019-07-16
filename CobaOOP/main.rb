require_relative "1.rb"
require_relative "ceknilai.rb"
require_relative "sodara.rb"

pil = "Y"
    while pil =="Y"
        break if pil =="T"

        puts "||||||||||||||||||||||Tugas Ruby|||||||||||||||||||||"
        puts "Menu Program : "
        puts "1. Program Bulan "
        puts "2. Grade Nilai "
        puts "3. Keluarga UwU"
        puts "||||||||||||||||||||||||||TEST|||||||||||||||||||||||"
        puts "  "
        pilih =gets.chomp
        if pilih=="1"
         Angka.new.satu
        elsif pilih =="2"
            Nilai.new.dua
        elsif pilih=="3"
            Tua.new.orang
        else
            puts ""

    end
    puts "   "
    puts "Mau mencoba lagi? Tekan Y = ya, T = tidak"
    pil =gets.chomp

end