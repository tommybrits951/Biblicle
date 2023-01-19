import {Genesis} from "./kjv/Genesis"
import {Exodus} from "./kjv/Exodus"
import {Leviticus} from "./kjv/Leviticus"
import {Numbers} from "./kjv/Numbers"
import {Deuteronomy} from "./kjv/Deuteronomy"
import {Joshua} from "./kjv/Joshua"
import {Judges} from "./kjv/Judges"
import {Ruth} from "./kjv/Ruth"
import {First_Samuel} from "./kjv/First_Samuel"
import {Second_Samuel} from "./kjv/Second_Samuel"
import {First_Kings} from "./kjv/First_Kings"
import {Second_Kings} from "./kjv/Second_Kings"
import {First_Chronicles} from "./kjv/First_Chronicles"
import {Second_Chronicles} from "./kjv/Second_Chronicles"
import {Ezra} from "./kjv/Ezra"
import {Nehemiah} from "./kjv/Nehemiah"
import {Esther} from "./kjv/Esther"
import {Job} from "./kjv/Job"
import {Psalms} from "./kjv/Psalms"
import {Proverbs} from "./kjv/Proverbs"
import {Ecclesiastes} from "./kjv/Ecclesiastes"
import {SongofSolomon} from "./kjv/SongofSolomon"
import {Isaiah} from "./kjv/Isaiah"
import {Jeremiah} from "./kjv/Jeremiah"
import {Lamentations} from "./kjv/Lamentations"
import {Ezekiel} from "./kjv/Ezekiel"
import {Daniel} from "./kjv/Daniel"
import {Hosea} from "./kjv/Hosea"
import {Joel} from "./kjv/Joel"
import {Amos} from "./kjv/Amos"
import {Obadiah} from "./kjv/Obadiah"
import {Jonah} from "./kjv/Jonah"
import {Micah} from "./kjv/Micah"
import {Nahum} from "./kjv/Nahum"
import {Habakkuk} from "./kjv/Habakkuk"
import {Zephaniah} from "./kjv/Zephaniah"
import {Haggai} from "./kjv/Haggai"
import {Zechariah} from "./kjv/Zechariah"
import {Malachi} from "./kjv/Malachi"
import {Matthew} from "./kjv/Matthew"
import {Mark} from "./kjv/Mark"
import {Luke} from "./kjv/Luke"
import {John} from "./kjv/John"
import {Acts} from "./kjv/Acts"
import {Romans} from "./kjv/Romans"
import {First_Corinthians} from "./kjv/First_Corinthians"
import {Second_Corinthians} from "./kjv/Second_Corinthians"
import {Galatians} from "./kjv/Galatians"
import {Ephesians} from "./kjv/Ephesians"
import {Philippians} from "./kjv/Philippians"
import {Colossians} from "./kjv/Colossians"
import {First_Thessalonians} from "./kjv/First_Thessalonians"
import {Second_Thessalonians} from "./kjv/Second_Thessalonians"
import {First_Timothy} from "./kjv/First_Timothy"
import {Second_Timothy} from "./kjv/Second_Timothy"
import {Titus} from "./kjv/Titus"
import {Philemon} from "./kjv/Philemon.js"
import {Hebrews} from "./kjv/Hebrews"
import {James} from "./kjv/James"
import {First_Peter} from "./kjv/First_Peter"
import {Second_Peter} from "./kjv/Second_Peter"
import {First_John} from "./kjv/First_John"
import {Second_John} from "./kjv/Second_John"
import {Third_John} from "./kjv/Third_John"
import {Jude} from "./kjv/Jude"
import {Revelation} from "./kjv/Revelation" 


const bookLink = [ Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges, Ruth, First_Samuel, Second_Samuel, First_Kings, Second_Kings, First_Chronicles, Second_Chronicles, Ezra, Nehemiah, Esther, Job, Psalms, Proverbs, Ecclesiastes, SongofSolomon, Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel, Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi, Matthew, Mark, Luke, John, Acts, Romans, First_Corinthians, Second_Corinthians, Galatians, Ephesians, Philippians, Colossians, First_Thessalonians, Second_Thessalonians, First_Timothy, Second_Timothy, Titus, Philemon, Hebrews, James, First_Peter, Second_Peter, First_John, Second_John, Third_John, Jude, Revelation] 
const bookList = [ "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "First_Samuel", "Second_Samuel", "First_Kings", "Second_Kings", "First_Chronicles", "Second_Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "SongofSolomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "First_Corinthians", "Second_Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "First_Thessalonians", "Second_Thessalonians", "First_Timothy", "Second_Timothy", "Titus", "Philemon", "Hebrews", "James", "First_Peter", "Second_Peter", "First_John", "Second_John", "Third_John", "Jude", "Revelation"]


const books = {}
const bookObj = () => {
    for (let i = 0; i < bookLink.length; i++) {

        books[bookList[i]] = bookLink[i]
        
    }
    
}
bookObj()


export {bookList}
export default books