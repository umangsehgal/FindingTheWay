let ListofNodes = ['home', 'office', 'school', 'hospital', 'supermarket', 'A', 'B', 'C']

let data = {
		home: [[20,50], ['supermarket', 'hospital', 'school', 'B']],
		office: [[], []],
		school: [[], []],
		hospital: [[], []],
		supermarket: [[], []],
		A: [[], []],
		B: [[], []],
		C: [[], []],
	}


    var columns =[
        { head: 'index', cl: 'index', html:'index' },
        { head: 'home', cl: 'title', html:'home' },
        { head: 'school', cl: 'num', html:'school' }, 
        { head: 'A', cl: 'num', html:'A' },
        { head: 'office', cl: 'num', html:'office' },
        { head: 'B', cl: 'num', html:'B' },
        { head: 'C', cl: 'num', html:'C' },
        { head: 'supermarket', cl: 'num', html:'supermarket' },
        { head: 'hospital', cl: 'num', html:'hospital' }
    ];

    <!-- Latest compiled and minified CSS -->

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">