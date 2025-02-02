build-seeds:
	docker compose -f docker-compose.seeds.yaml up
seeds:
	docker compose -f docker-compose.seeds.yaml up
	docker compose up -d --force-recreate --no-deps devbox

up:
	docker compose pull --quiet
	docker compose build
	docker compose up -d

up-video:
	docker compose -f compose.yaml -f compose.video.yaml pull --quiet
	docker compose build
	docker compose -f compose.yaml -f compose.video.yaml up -d
