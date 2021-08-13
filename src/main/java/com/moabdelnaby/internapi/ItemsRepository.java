package com.moabdelnaby.internapi;

import org.springframework.data.jpa.repository.JpaRepository;
import org.yaml.snakeyaml.events.Event;

public interface ItemsRepository extends JpaRepository<Item, Integer> {
}
