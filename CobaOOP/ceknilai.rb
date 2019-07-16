class Nilai

   def dua
        print "Masukkan nilai Anda : "
        nilai = gets
        nilai.chop!
        if nilai.to_i >100
        puts "Anda Mimpi!"
        elsif nilai.to_i >= 87
        puts "Anda mendapat grade A"
        elsif nilai.to_i >= 77
        puts "Anda mendapat grade B"
        elsif nilai.to_i >70
        puts "Anda mendapat grade C"
        else
        puts "Anda mendapat grade D"
        end
    end
end