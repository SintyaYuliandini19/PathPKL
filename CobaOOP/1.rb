class Angka      
        
    def satu
        
        puts "PROGRAM MENAMPILKAN BULAN"
        puts "-------------------------------------"
        print "masukkan angka [1-12]: "
        angka=gets.to_f
        puts "-------------------------------------"
        case
            when angka==1
            print "JANUARI"
            when angka==2
            print "FEBRUARI"
            when angka==3
            print "MARET"
            when angka==4
            print "APRIL"
            when angka==5
            print "MEI"
            when angka==6
            print "JUNI"
            when angka==7
            print "JULI"
            when angka==8
            print "AGUSTUS"
            when angka==9
            print "SEPTEMBER"
            when angka==10
            print "OKTOBER"
            when angka==11
            print "NOVEMBER"
            when angka==12
            print "DESEMBER"
            else
            print "INPUTAN ANDA SALAH!!!"                                      
        end
    end
end