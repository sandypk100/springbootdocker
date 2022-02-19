Feature: Google search

  @google
  Scenario Outline: I want to search on google site
    Given I am on the google site
    When I enter "<keyword>" as a keyword
    Then I should see search results page
    Then I should see at least <count> results

    Examples:
      | keyword     | count       |
      | quantuam physcics    | 2           |
      | stars        | 5           |
      | dark matter     | 87          |

