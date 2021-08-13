package com.moabdelnaby.internapi;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("/api/items")
@RestController
public class ItemsController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/{id}")
    public Item getItem(@PathVariable(name = "id") Integer id)
    {
        return itemService.getItem(id);
    }

    @GetMapping("/")
    public List<Item> items(@RequestParam(value = "offset", defaultValue = "0") Integer offset, @RequestParam(value = "limit", defaultValue = "-1") Integer limit)
    {
        return itemService.getItems(offset, limit);
    }
}
