
function dataDiri(str, num){

    var bio = {
        "name"          : str,
        "age"           : num,
        "address"       : "JL. TGK ABD RAHMAN NO.36 A DUSUN BUNGONG JEUMPA",
        "hobbies"       : ["Coding", "Membaca", "Musik", "Sepak Bola", "Riding"],
        "is_married"    : false,
        "list_school"   :[ 
            {"name" : "TK-Kartika Banda Aceh",         "year_in" : 2003, "year_out" : 2004, "major" : null},
            {"name" : "MIN Teladan Banda Aceh",        "year_in" : 2004, "year_out" : 2010, "major" : null},
            {"name" : "SMPN 7 Banda Aceh",             "year_in" : 2010, "year_out" : 2013, "major" : null},
            {"name" : "SMAN 9 Tunas Bangsa Banda Aceh","year_in" : 2013, "year_out" : 2016, "major" : "IPA"}
        ],
        "skills"        : [
            {"skill_name" : "HTML",      "level" : "advanced"},
            {"skill_name" : "CSS",       "level" : "advanced"},
            {"skill_name" : "JAVASCRIPT","level" : "beginner"},
            {"skill_name" : "JAVA",      "level" : "beginner"},
            {"skill_name" : "PHP",       "level" : "beginner"},
            {"skill_name" : "PYTHON",    "level" : "beginner"}
        ],
        "interest_in_coding" : true
    }

    var hasil = JSON.stringify(bio);
    return hasil;
}

console.log(dataDiri('Teuku Rizky Meutuah Ariefansyah', 21));