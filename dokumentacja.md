# Projekt 2 z Grafiki komputerowej

Autor: Grzegorz Rozdzialik
Grupa poniedziałkowa, 13-15

Aplikację bez budowania można uruchomić przenosząc katalog _dist_ na serwer i uruchamiając
plik _index.html_. Nie uda się uruchomienie z katalogu na dysku ponieważ aplikacja
używa WebWorkerów.


## Klawiszologia

Wierzchołki dodajemy klikając na wolny kawałek obszaru w ramce (canvas).
Aby zamknąć wielokąt należy kliknąć w wierzchołek, z którego zaczęliśmy tworzenie nowego wielokąta.

Wierzchołki możemy przesuwać klikając w nie i przeciągając myszką.

Wierzchołki możemy usuwać klikając w nie podwójnie. Nie można zejść poniżej 3 wierzchołków, czyli
figurą o minimalnej ilości wierzchołków, która jest dopuszczalna w projekcie jest trójkąt.

Wierzchołki możemy dodawać klikając podwójnie w okolicy danej krawędzi. Wierzchołek zostanie dodany
w środku wybranej krawędzi.

Klawiszem _Escape_ możemy anulować dodawanie nowego wielokąta, o ile nie został on już zamknięty.

Przytrzymanie klawisza _Ctrl_ pozwala ruszać całym wielokątem.

Kliknięcie z przytrymanym klawiszem Shift powoduje obcięcie dwóch wielokątów używając algorytmu
Sutherlanda-Hodgmana.
