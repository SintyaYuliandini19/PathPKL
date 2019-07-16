class Tua
    def orang
        puts "Keluarga we :v"
        array =["uncles","sisters","brothers","aunts"]
        4.times do |i|
            puts "#{i+1}. #{array[(i-1)+1]}"
    end

  keluarga = {
        "uncles" =>  "Asu",
        "sisters" => "Jeje",
        "brothers" => "frank",
        "aunts" =>"selly"

        }
        puts "Pilih anggota keluarga yand ingin kamu ketahui : "
        view = gets.chomp
        puts "#{view} = #{keluarga[view]}"
    end

end
