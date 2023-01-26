function vacationBookList(input){
    let pencilPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let litersBoardCleaner = Number(input[2]);
    let discountPercent = Number(input[3] / 100);
    let sumPerPencils = pencilPacks * 5.80;
    let sumPerMarkers = markerPacks * 7.20;
    let sumBoardCleaner = litersBoardCleaner * 1.20;
    let totalCost = sumBoardCleaner + sumPerMarkers + sumPerPencils;
    let totalCostWithDiscount = totalCost - (totalCost * discountPercent);
    console.log(totalCostWithDiscount)
}
vacationBookList(["2","3","4","25"]);