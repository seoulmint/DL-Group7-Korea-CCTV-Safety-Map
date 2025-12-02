document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map-container');
    const buttonArea = document.getElementById('button-area');

    // Define mappings for regions, grid sizes, file names, Korean names, and loading times
    const regionData = {
        'Korea': { koreanName: '전국', fileName: 'Korea_safety_map.html', gridSize: '2.5km', loadingTime: '오랜 시간이 걸립니다.' },
        'Seoul': { koreanName: '서울', fileName: 'Seoul_safety_map.html', gridSize: '0.5km', loadingTime: '거의 없습니다.' },
        'Busan': { koreanName: '부산', fileName: 'Busan_safety_map.html', gridSize: '0.5km', loadingTime: '거의 없습니다.' },
        'Daegu': { koreanName: '대구', fileName: 'Daegu_safety_map.html', gridSize: '0.5km', loadingTime: '거의 없습니다.' },
        'Incheon': { koreanName: '인천', fileName: 'Incheon_safety_map.html', gridSize: '0.5km', loadingTime: '거의 없습니다.' },
        'Gwangju': { koreanName: '광주', fileName: 'Gwangju_safety_map.html', gridSize: '0.5km', loadingTime: '거의 없습니다.' },
        'Daejeon': { koreanName: '대전', fileName: 'Daejeon_safety_map.html', gridSize: '0.5km', loadingTime: '거의 없습니다.' },
        'Ulsan': { koreanName: '울산', fileName: 'Ulsan_safety_map.html', gridSize: '0.5km', loadingTime: '거의 없습니다.' },
        'Jeju': { koreanName: '제주', fileName: 'Jeju_safety_map.html', gridSize: '0.5km', loadingTime: '거의 없습니다.' },
        'Gyeonggi': { koreanName: '경기도', fileName: 'Gyeonggi_safety_map.html', gridSize: '1.5km', loadingTime: '약간 시간이 걸립니다.' },
        'Chungcheong': { koreanName: '충청도', fileName: 'Chungcheong_safety_map.html', gridSize: '1.5km', loadingTime: '약간 시간이 걸립니다.' },
        'Gyeongsang': { koreanName: '경상도', fileName: 'Gyeongsang_safety_map.html', gridSize: '1.5km', loadingTime: '약간 시간이 걸립니다.' },
        'Jeolla': { koreanName: '전라도', fileName: 'Jeolla_safety_map.html', gridSize: '1.5km', loadingTime: '약간 시간이 걸립니다.' },
    };

    const createButton = (regionKey) => {
        const data = regionData[regionKey];
        const button = document.createElement('button');
        button.textContent = data.koreanName;
        button.classList.add('region-button');
        button.dataset.regionKey = regionKey;
        button.addEventListener('click', () => {
            loadMap(regionKey);
        });
        return button;
    };

    const loadMap = (regionKey) => {
        const mapInfo = regionData[regionKey];
        if (mapInfo) {
            mapContainer.innerHTML = `<iframe src="html/${mapInfo.fileName}" width="100%" height="100%" frameborder="0"></iframe>`;
        } else {
            mapContainer.innerHTML = `<p>${regionKey}에 대한 지도 정보를 찾을 수 없습니다.</p>`;
        }
    };

    // Button groups
    const buttonGroups = [
        {
            title: '전국 (2.5km) - 로딩에 오랜 시간이 걸립니다.',
            regions: ['Korea'],
            type: '전국'
        },
        {
            title: '광역시/특별시 (0.5km) - 로딩이 거의 없습니다.',
            regions: ['Seoul', 'Busan', 'Daegu', 'Incheon', 'Gwangju', 'Daejeon', 'Ulsan', 'Jeju'],
            type: '광역시/특별시'
        },
        {
            title: '도 (1.5km) - 로딩에 약간 시간이 걸립니다.',
            regions: ['Gyeonggi', 'Chungcheong', 'Gyeongsang', 'Jeolla'],
            type: '도'
        }
    ];

    buttonGroups.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('button-group');

        const groupTitle = document.createElement('h3');
        groupTitle.textContent = group.title;
        groupDiv.appendChild(groupTitle);

        group.regions.forEach(regionKey => {
            if (regionData[regionKey]) {
                groupDiv.appendChild(createButton(regionKey));
            }
        });
        buttonArea.appendChild(groupDiv);
    });
});
