	function findTwoMatchingBoxesBasic(indexCallback, messageCallback){
		for (var  i = 0; i < 9; i++) {
			for (var j = 0; j < 8; j++) {
				var index = indexCallback(i, j);
				if ($scope.possibleAnswers[index].length !== 2) {
					continue;
				}
				for (var k = j + 1; k < 9; k++) {
					var kIndex = indexCallback(i, k);
					if ($scope.possibleAnswers[index].toString() === $scope.possibleAnswers[kIndex].toString()) {
						var changesMade = false;
						for (var l = 0; l < 9; l++) {
							if (l === j || l === k) {
								continue;
							}
							var lIndex = indexCallback(i, l);
							var firstAnswerIndex = $scope.possibleAnswers[lIndex].indexOf($scope.possibleAnswers[index][0]);
							if (firstAnswerIndex !== -1) {
								changesMade = true;
								$scope.possibleAnswers[lIndex].splice(firstAnswerIndex, 1);
							}
							var secondAnswerIndex = $scope.possibleAnswers[lIndex].indexOf($scope.possibleAnswers[index][1]);
							if (secondAnswerIndex !== -1) {
								changesMade = true;
								$scope.possibleAnswers[lIndex].splice(secondAnswerIndex, 1);
							}
						}
						if (changesMade) {
							$scope.output += messageCallback(i, j, k, index);
							return true;
						}
					}
				}
			}
		}
		return false;
	}
}]);
